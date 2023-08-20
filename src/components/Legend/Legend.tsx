import { Categories, Category, MarkerType } from "../../api/types";
import { MarkerIcon } from "../Icon/Icon";

import './Legend.css';

export type FeatureFilter = {
  [Type in MarkerType]?: boolean;
}

export interface LegendProps {
  filter?: FeatureFilter;
  onFilterChange?: (newFilters: FeatureFilter) => void;
}

interface FilterCategoryProps extends LegendProps {
  category: Category;
}

const FilterCategory = ({ category, filter, onFilterChange }: FilterCategoryProps) => {
  const filterOptions = category.markers.map(markerType => {
    const isChecked = !!filter && !!filter[markerType];

    return <label key={markerType} className="FilterCategory__option">
      <MarkerIcon type={markerType} />
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => onFilterChange?.({ [markerType]: !isChecked })}
      />
    </label>
  });

  return <div className="FilterCategory__container">
    <h3>{ category.label }</h3>
    <div className="FilterCategory__options">
      { filterOptions }
    </div>
  </div>;
};

export const Legend = (props: LegendProps) => {
  const filterCategories = Categories.map(cat => <FilterCategory category={cat} { ...props }/>)

  return <div className="Legend__container">
    { filterCategories }
  </div>;
};
