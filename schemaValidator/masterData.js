export default {
  properties: {
    acknowledge: {
      type: 'number',
    },
    branch: {
      type: 'array',
      properties: {
        id: {
          type: 'number',
        },
        companyCode: {
          type: 'string',
        },
        regionName: {
          type: 'string',
        },
        branchCode: {
          type: 'string',
        },
        branchTypeCode: {
          type: 'string',
        },
        branchDescription: {
          type: 'string',
        },
        branchPICName: {
          type: 'string',
        },
        bookType: {
          type: 'number',
        },
        postalCode: {
          type: 'string',
        },
        address: {
          type: 'string',
        },
        latitude: {
          type: 'number',
        },
        longitude: {
          type: 'number',
        },
        distance: {
          type: 'number',
        },
        phone1: {
          type: 'string',
        },
        phone2: {
          type: 'string',
        },
        fax: {
          type: 'string',
        },
        branchEmailTo: {
          type: 'string',
        },
        branchEmailCc: {
          type: 'string',
        },
        webSiteLink: {
          type: 'string',
        },
        mondayToFriday: {
          type: 'string',
        },
        saturday: {
          type: 'string',
        },
        sunday: {
          type: 'string',
        },
        isMainDealer: {
          type: 'boolean',
        },
        isActive: {
          type: 'boolean',
        },
        districtId: {
          type: 'number',
        },
        districtName: {
          type: 'string',
        },
        hasBookingStall: {
          type: 'boolean',
        },
      },
      required: [
        'id',
        'companyCode',
        'regionName',
        'branchCode',
        'branchTypeCode',
        'branchDescription',
        'branchPICName',
        'bookType',
        'postalCode',
        'address',
        'latitude',
        'longitude',
        'distance',
        'phone1',
        'phone2',
        'fax',
        'branchEmailTo',
        'branchEmailCc',
        'webSiteLink',
        'mondayToFriday',
        'saturday',
        'sunday',
        'isMainDealer',
        'isActive',
        'districtId',
        'districtName',
        'hasBookingStall',
      ],
    },
    build: {
      type: 'string',
    },
    district: {
      type: 'array',
    },
    hobbies: {
      type: 'array',
    },
    holidayCalendar: {
      type: 'array',
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
    },
    parameterConfigApplication: {
      type: 'array',
    },
    province: {
      type: 'array',
    },
    region: {
      type: 'array',
    },
    vehicleBrand: {
      type: 'array',
    },
    vehicleTestDrive: {
      type: 'array',
    },
    version: {
      type: 'string',
    },
    location: {
      type: 'array',
    },
  },
  required: [
    'acknowledge',
    'branch',
    'build',
    'district',
    'hobbies',
    'holidayCalendar',
    'jobService',
    'jobServiceCompany',
    'parameterConfigApplication',
    'province',
    'region',
    'vehicleBrand',
    'vehicleTestDrive',
    'version',
    'location',
  ],
  additionalProperties: false,
};

export const jobServiceCompanySchema = {
  type: 'object',
  required: [
    'branch',
    'region',
    'jobService',
    'jobServiceCompany',
    'vehicleBrand',
    'holidayCalendar',
    'parameterConfigApplication',
    'hobbies',
    'province',
    'district',
    'vehicleTestDrive',
    'location',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    branch: {
      type: 'array',
    },
    region: {
      type: 'array',
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'jobCode',
          'jobDescription',
          'actual',
          'rate',
          'price',
          'vehicleType',
          'serviceCategory',
          'isActive',
        ],
        properties: {
          id: {
            type: 'integer',
          },
          jobCode: {
            type: 'string',
          },
          jobDescription: {
            type: 'string',
          },
          actual: {
            type: 'number',
          },
          rate: {
            type: 'integer',
          },
          price: {
            type: 'integer',
          },
          vehicleType: {
            type: 'string',
          },
          serviceCategory: {
            type: 'string',
          },
          isActive: {
            type: 'boolean',
          },
        },
      },
    },
    vehicleBrand: {
      type: 'array',
    },
    holidayCalendar: {
      type: 'array',
    },
    parameterConfigApplication: {
      type: 'array',
    },
    hobbies: {
      type: 'array',
    },
    province: {
      type: 'array',
    },
    district: {
      type: 'array',
    },
    vehicleTestDrive: {
      type: 'array',
    },
    location: {
      type: 'array',
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};

export const vehicleBrandSchema = {
  type: 'object',
  required: [
    'branch',
    'region',
    'jobService',
    'jobServiceCompany',
    'vehicleBrand',
    'holidayCalendar',
    'parameterConfigApplication',
    'hobbies',
    'province',
    'district',
    'vehicleTestDrive',
    'location',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    branch: {
      type: 'array',
    },
    region: {
      type: 'array',
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
    },
    vehicleBrand: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'vehicleBrandCode',
          'vehicleType',
          'vehicleDescription',
          'isActive',
        ],
        properties: {
          id: {
            type: 'integer',
          },
          vehicleBrandCode: {
            type: 'string',
          },
          vehicleType: {
            type: 'string',
          },
          vehicleDescription: {
            type: 'string',
          },
          isActive: {
            type: 'boolean',
          },
        },
      },

    },
    holidayCalendar: {
      type: 'array',
    },
    parameterConfigApplication: {
      type: 'array',
    },
    hobbies: {
      type: 'array',
    },
    province: {
      type: 'array',
    },
    district: {
      type: 'array',
    },
    vehicleTestDrive: {
      type: 'array',
    },
    location: {
      type: 'array',
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};

export const masterDataProvinceSchema = {
  type: 'object',
  required: [
    'branch',
    'region',
    'jobService',
    'jobServiceCompany',
    'vehicleBrand',
    'holidayCalendar',
    'parameterConfigApplication',
    'hobbies',
    'province',
    'district',
    'vehicleTestDrive',
    'location',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    branch: {
      type: 'array',
    },
    region: {
      type: 'array',
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
    },
    vehicleBrand: {
      type: 'array',
    },

  },
  holidayCalendar: {
    type: 'array',
  },
  parameterConfigApplication: {
    type: 'array',
  },
  hobbies: {
    type: 'array',
  },
  province: {
    type: 'array',
    items: {
      type: 'object',
      required: [
        'id',
        'provinceCode',
        'provinceName',
        'isActive',
      ],
      properties: {
        id: {
          type: 'integer',
        },
        provinceCode: {
          type: 'string',
        },
        provinceName: {
          type: 'string',
        },
        isActive: {
          type: 'boolean',
        },
      },

    },
    district: {
      type: 'array',
    },
    vehicleTestDrive: {
      type: 'array',
    },
    location: {
      type: 'array',
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};

export const districtSchema = {
  type: 'object',
  required: [
    'branch',
    'region',
    'jobService',
    'jobServiceCompany',
    'vehicleBrand',
    'holidayCalendar',
    'parameterConfigApplication',
    'hobbies',
    'province',
    'district',
    'vehicleTestDrive',
    'location',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    branch: {
      type: 'array',
    },
    region: {
      type: 'array',
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
    },
    vehicleBrand: {
      type: 'array',

    },
    holidayCalendar: {
      type: 'array',
    },
    parameterConfigApplication: {
      type: 'array',
    },
    hobbies: {
      type: 'array',
    },
    province: {
      type: 'array',
    },
    district: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'provinceId',
          'districtCode',
          'districtName',
          'isActive',
          'regions',
        ],
        properties: {
          id: {
            type: 'integer',
          },
          provinceId: {
            type: 'integer',
          },
          districtCode: {
            type: 'string',
          },
          districtName: {
            type: 'string',
          },
          isActive: {
            type: 'boolean',
          },
          regions: {
            type: 'array',
          },
        },
      },
    },
    vehicleTestDrive: {
      type: 'array',
    },
    location: {
      type: 'array',
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};

export const RegionsSchema = {
  type: 'array',
  items: {
    type: 'object',
    required: [
      'id',
      'salesOrganization',
      'regionCode',
      'regionName',
    ],
    properties: {
      id: {
        type: 'integer',
      },
      salesOrganization: {
        type: 'string',
      },
      regionCode: {
        type: 'string',
      },
      regionName: {
        type: 'string',
      },
    },
  },
};


export const masterDataRegionSchema = {
  type: 'object',
  required: [
    'branch',
    'region',
    'jobService',
    'jobServiceCompany',
    'vehicleBrand',
    'holidayCalendar',
    'parameterConfigApplication',
    'hobbies',
    'province',
    'district',
    'vehicleTestDrive',
    'location',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    branch: {
      type: 'array',
    },
    region: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'salesOrganization',
          'regionCode',
          'regionName',
        ],
        properties: {
          id: {
            type: 'integer',
          },
          salesOrganization: {
            type: 'string',
          },
          regionCode: {
            type: 'string',
          },
          regionName: {
            type: 'string',
          },
        },
      },
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
    },
    vehicleBrand: {
      type: 'array',

    },
    holidayCalendar: {
      type: 'array',
    },
    parameterConfigApplication: {
      type: 'array',
    },
    hobbies: {
      type: 'array',
    },
    province: {
      type: 'array',
    },
    district: {
      type: 'array',
    },
    vehicleTestDrive: {
      type: 'array',
    },
    location: {
      type: 'array',
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};

export const holidayCalendarSchema = {
  type: 'object',
  required: [
    'branch',
    'region',
    'jobService',
    'jobServiceCompany',
    'vehicleBrand',
    'holidayCalendar',
    'parameterConfigApplication',
    'hobbies',
    'province',
    'district',
    'vehicleTestDrive',
    'location',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    branch: {
      type: 'array',
    },
    region: {
      type: 'array',
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
    },
    vehicleBrand: {
      type: 'array',

    },
    holidayCalendar: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'holidayDate',
          'holidayDescription',
        ],
        properties: {
          id: {
            type: 'integer',
          },
          holidayDate: {
            type: 'string',
          },
          holidayDescription: {
            type: 'string',
          },
        },
      },
    },
    parameterConfigApplication: {
      type: 'array',
    },
    hobbies: {
      type: 'array',
    },
    province: {
      type: 'array',
    },
    district: {
      type: 'array',
    },
    vehicleTestDrive: {
      type: 'array',
    },
    location: {
      type: 'array',
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};

export const vehicleTestDriveSchema = {
  type: 'object',
  required: [
    'branch',
    'region',
    'jobService',
    'jobServiceCompany',
    'vehicleBrand',
    'holidayCalendar',
    'parameterConfigApplication',
    'hobbies',
    'province',
    'district',
    'vehicleTestDrive',
    'location',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    branch: {
      type: 'array',
    },
    region: {
      type: 'array',
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
    },
    vehicleBrand: {
      type: 'array',
    },
    holidayCalendar: {
      type: 'array',
    },
    parameterConfigApplication: {
      type: 'array',
    },
    hobbies: {
      type: 'array',
    },
    province: {
      type: 'array',
    },
    district: {
      type: 'array',
    },
    vehicleTestDrive: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'vehicleBrandId',
          'vehicleType',
          'branchId',
          'branchCode',
          'isTestDrive',
          'isActive',
          'modelMaterialId',
        ],
        properties: {
          id: {
            type: 'integer',
          },
          vehicleBrandId: {
            type: 'integer',
          },
          vehicleType: {
            type: 'string',
          },
          branchId: {
            type: 'integer',
          },
          branchCode: {
            type: 'string',
          },
          isTestDrive: {
            type: 'boolean',
          },
          isActive: {
            type: 'boolean',
          },
          modelMaterialId: {
            type: 'integer',
          },
        },
      },
    },
    location: {
      type: 'array',
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};

export const parameterConfigApplicationSchema = {
  type: 'object',
  required: [
    'branch',
    'region',
    'jobService',
    'jobServiceCompany',
    'vehicleBrand',
    'holidayCalendar',
    'parameterConfigApplication',
    'hobbies',
    'province',
    'district',
    'vehicleTestDrive',
    'location',
    'acknowledge',
    'version',
    'build',
  ],
  properties: {
    branch: {
      type: 'array',
    },
    region: {
      type: 'array',
    },
    jobService: {
      type: 'array',
    },
    jobServiceCompany: {
      type: 'array',
    },
    vehicleBrand: {
      type: 'array',
    },
    holidayCalendar: {
      type: 'array',
    },
    parameterConfigApplication: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'companyCode',
          'key',
          'value',
          'isActive',
        ],
        properties: {
          id: {
            type: 'integer',
          },
          companyCode: {
            type: 'string',
          },
          key: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
          isActive: {
            type: 'boolean',
          },
        },
      },
    },
    hobbies: {
      type: 'array',
    },
    province: {
      type: 'array',
    },
    district: {
      type: 'array',
    },
    vehicleTestDrive: {
      type: 'array',
    },
    location: {
      type: 'array',
    },
    acknowledge: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    build: {
      type: 'string',
    },
  },
};
