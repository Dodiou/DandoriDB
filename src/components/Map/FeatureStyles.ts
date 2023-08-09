import { Style, Icon } from 'ol/style';

export const CaveStyle = new Style({
  image: new Icon({
    src: '/public/icons/radar/cave.png'
  })
});

export const MoundStyle = new Style({
  image: new Icon({
    src: 'https://pikmin.wiki.gallery/images/8/89/Cave_icon.png'
  })
});

export const TreasureStyle = new Style({
  image: new Icon({
    src: '/public/icons/radar/treasure.png'
  })
});

export const CreatureStyle = new Style({
  image: new Icon({
    src: '/public/icons/radar/creature.png'
  })
});

export const SurfaceBaseStyle = new Style({
  image: new Icon({
    src: '/public/icons/radar/baseOnion.png'
  })
})

export const CaveBaseStyle = new Style({
  image: new Icon({
    src: '/public/icons/radar/baseBeagle.png'
  })
})

export const MaterialStyle = new Style({
  image: new Icon({
    src: '/public/icons/radar/materials.png'
  })
})
