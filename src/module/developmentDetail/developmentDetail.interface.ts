interface IAddress {
    id: string;
    latitude: string;
    longitude: string;
    country: string;
    state: string;
    shortenState: string;
    area: string;
    thoroughfare: string;
    thoroughfareNumber: string;
    postalCode: string;
    region: null;
    buildingName: null;
    slug: string;
    updatedAt: string;
  }
  
  
  interface IThumbnail {
    id: string;
    type: string;
    location: string;
    name: string;
    textAlternative: null; 
    size: number;
    url: string;
    position: number;
    createdAt: string;
    updatedAt: string;
  }
  
  interface IListType {
    id: string;
    type: string;
    location: string;
    name: string;
    textAlternative: string;
    size: number;
    url: string;
    position: number;
    createdAt: string;
    updatedAt: string;
  }
  
  interface File {
    thumbnail: IThumbnail[];
    listType: IListType[];
  }
  
  interface IDescription {
    textListing: string;
    textProfile: string;
    textTransactional: string;
  }
  
  interface IProperties {
    id: string;
    title: string;
    priceDisplay: string;
    price: string;
    priceFrom: string;
    priceTo: string;
    bedrooms: string;
    bathrooms: string;
    carSpaces: string;
    livingAreas: string;
    discr: string;
    frontage: null;
    depth: null;
    levels: null;
    aspect: null;
    areaTotal: number;
    areaExternal: null;
    areaInternal: null;
    createdAt: string;
    useFloorPlan: number;
    isHidden: number;
    files: File;
    studyroom: string;
    private_pool: string;
    enquire_only: number;
    slug: string;
    unit_number: string;
    isUnitNumberHidden: number;
    description: IDescription;
  }
  
  interface IDevelopmentDetail {
    title: string;
    projectStatus: null;
    discr: string;
    totalProperties: number;
    projectTypes: string;
    priceSearch: string;
    bedrooms: string;
    bathrooms: string;
    carSpaces: string;
    studyroom: string;
    private_pool: string;
    address: IAddress;
    properties : IProperties[];
    displaySuite: {
      address: IAddress
    };
    description: IDescription
  }


  export interface IDevDetails {
    devDetail: IDevelopmentDetail
  }