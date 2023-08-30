import { useMemo, useState } from "react";
import { ByteInput } from "./ByteInput";
import { ValidatorFn, useValidation } from "../../hooks/useValidation";

const getByteAsHex = (byte: number) => ('00' + byte.toString(16)).slice(-2);

interface StringMatch {
  index: number;
  value: string;
}

const scanForStrings = (byteArray: number[]) => {
  const strings: StringMatch[] = [];
  // minus 6, since the shortest (non-empty) string length is '2, 0, 0, 0, x, 0'
  for (let i = 0; i < byteArray.length - 6; i++) {
    const strStart = i + 4;
    const cstrLength = byteArrToInt(byteArray.slice(i, i + 4).reverse());
    if (cstrLength !== 0 && cstrLength > byteArray.length - strStart) {
      continue;
    }

    const nextNullTerminator = byteArray.indexOf(0, strStart);
    // remove null from cstr
    if (nextNullTerminator - strStart !== cstrLength - 1) {
      continue;
    }

    strings.push({
      index: i,
      // add 4 to get the length + 4 length bytes
      value: byteArrToStr(byteArray.slice(i, i + cstrLength + 4))
    })
  }
  return strings;
}

const padArray = (arr: number[], len = 4, fill = 0) => {
  return arr.slice().concat(
    Array(len).fill(fill)
  ).slice(0, len);
}

const floatToByteArr = (num: number) => {
  const view = new DataView(new ArrayBuffer(4));
  view.setFloat32(0,num);
  return new Array(4)
    .fill(4)
    .map((_, i) => view.getUint8(i));
}

const intToByteArr = (num: number) => {
  const view = new DataView(new ArrayBuffer(4));
  view.setInt32(0,num);
  return new Array(4)
    .fill(4)
    .map((_, i) => view.getUint8(i));
}

const byteArrToDataView = (nums: number[]): DataView => {
  nums = padArray(nums);

  const view = new DataView(new ArrayBuffer(4));
  nums.forEach((n, i) => {
    if (n < 0) n = 0;
    if (n > 255) n = 255;
    view.setUint8(i, n);
  });
  return view;
}

const byteArrToFloat = (nums: number[]) => {
  return byteArrToDataView(nums).getFloat32(0);
}

const byteArrToInt = (nums: number[]) => {
  return byteArrToDataView(nums).getInt32(0);
}

const byteArrToStr = (nums: number[]) => {
  const cstrLength = byteArrToInt(nums.slice(0, 4).reverse());
  // length - 4 to remove the cstrLength bytes
  return cstrLength === nums.length - 4
  // -1 to remove null terminator
    ? nums.slice(4, -1).map(n => String.fromCharCode(n)).join('')
    : '';
}

const byteStringPatternValidator: ValidatorFn<string> = (value) => {
  if (!value) {
    return undefined;
  }

  const allBytes = value.split(',').map(v => v.trim());
  for (const byte of allBytes) {
    if (!byte.trim().match(/^\d+$/)) {
      return {
        invalidByte: { byte: byte.trim() }
      };
    }
  }

  return undefined;
};

const floatStringPatternValidator: ValidatorFn<string> = (value) => {
  if (!value || /[+-]?\d+(\.\d+)?([eE][+-]?\d+)?/.test(value)) {
    return undefined;
  }
  return {
    pattern: { value }
  };
}

export const HackingTools = () => {
  const [byteString, setByteString] = useState<string>('');
  const [floatString, setFloatString] = useState<string>('0.0');
  const [stringString, setStringString] = useState<string>('');

  const { isValid: byteStringIsValid } = useValidation({ value: byteString, validators: [byteStringPatternValidator] });
  const { isValid: floatIsValid } = useValidation({ value: floatString, validators: [floatStringPatternValidator] });

  const { bytesAsFloat, bytesAsInt, stringsInBytes } = useMemo(() => {
    if (!byteStringIsValid) {
      return {
        bytesAsFloat: '',
        bytesAsInt: '',
        stringsInBytes: []
      };
    }

    const rawBytes = byteString.split(',').map(byte => {
      return parseInt(byte.trim());
    })
    const byteArr = padArray(rawBytes).reverse();
    const bytesAsInt = byteArrToInt(byteArr);

    return {
      bytesAsFloat: byteArrToFloat(byteArr),
      bytesAsInt,
      stringsInBytes: scanForStrings(rawBytes)
    }
  }, [byteString, byteStringIsValid]);

  const { floatByteString, floatHexString } = useMemo(() => {
    if (!floatIsValid) {
      return {
        floatByteString: '',
        floatHexString: ''
      };
    }

    const byteArr = floatToByteArr(parseFloat(floatString));
    return {
      floatByteString: byteArr.slice().reverse().join(', '),
      floatHexString: byteArr.map(getByteAsHex).join('')
    }
  }, [floatString, floatIsValid]);

  const stringBytes = useMemo(() => {
    const lengthBytes = intToByteArr(stringString.length + 1).reverse();

    return [
      ...lengthBytes,
      ...stringString.split('').map(char => char.charCodeAt(0)),
      0
    ].join(', ');
  }, [stringString]);

  return <div className="HackingTools__container">
    <label>
      <div>Float to Number:</div>
      <input type='number' value={floatString} onChange={(evt) => setFloatString(evt.target.value)} />
    </label>
    <div>Bytes (Little Endian): { floatByteString }</div>
    <div>Hex: 0x{ floatHexString }</div>
    
    <br />
    <ByteInput
      value={byteString}
      onChange={setByteString}
    />
    <div>Int: { bytesAsInt }</div>
    <div>Float: { bytesAsFloat }</div>
    <div>
      Strings:
      {
        stringsInBytes.map(s => {
          return <div>{ s.value }</div>
        })
      }
    </div>

    <br />
    <textarea value={stringString} onChange={(evt) => setStringString(evt.target.value)} />
    <div>Bytes: { stringBytes }</div>
  </div>;
};