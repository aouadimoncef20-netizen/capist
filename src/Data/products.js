export const products = [];

export const categories = [];

export const partners = [];

export const instagramImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAaC1zMuSUjBHOMv_sSsBkDgokQIIA-NDMhPaw3IGe1m18Ucfko7_D9kcMQRAjirgxla7tRzbpPoEsV9VlgfHyWbkwMpVnVzqUKB4nuZB3Ig1TzNu9Trwr-kFvb1-Z0sadaN9qzWcblPz4zz919QevyavPb7ruoYUYDAB_Db-M_vtT8k3RD5cZtdh2sPq24Ool6NND4k4M0AKt3JXwTvLhRw6IbBINo9tS4-w929SVkzeaZm5e6mfXtyQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBF4bfFdTu_bXkIWi0ndtXEcO0AL6PRNtYUUIsQk_RhTxzOnN8vghqA3lQFZBIEtRJevtuGDPVNqH5IWnvpRhdXee8s8zjATmbI3oacvW8HzfdapN1nfkr7z4NEXNl1LUE4LwoJ0phAWoJJpijhQqP-b2b2N6xUlhkNmDoCyI_z4Nl0dt7diwrf35SSGWP-sChwPnAKNz4hbrcJUK2UTyNhsU_L5IBvypP-yBXcEmC4Xv4DM3J9h9Q_yg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCAL6nUs4LAlp-JHq8WzhcFbdXATFYkYm3y4p_U7FnPhKpv_BkFt_tuuhAZezvyH9yyi4V-XXHGKXWoqcJIIxNyS0HC8bRlZNqT145gVixZ0Crum-uWl2IcD6JbfauyyDpZ9964ZRD0ZTOtXmwxkuCVH3JhjMQo7EqmELcRhzCugGd0DyWLKrfIVNB5-OT6cwRBDKtYPNobXL9xoyPWs-sCygEr6Q26qJQZy2D0e3aS3WSoaSRzZbop6Q',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAc0Oiar9gq2ZM6cbUiVXClxe_RE6MAnZmhwE0GlaqFYXsLbIm75MNOLEh1kkHKGMB6FHycfOvmMBLGb-azXNRkbskkQg04Gn-Y7PfRjdP3pXoLM2b6YUDzGqv46MVTPlHmw4lvnWTStZqmJHUAutGD24g9F9VVkkCOueFCTpCfIZ_hKDmbMetWfsAtnUc08sehkGPQkaMVlJmO_SuJU9gZXMV5asxIUn4PAYSxBM6hd4lWExD4nedi-g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCvUxmp4hQvsGTp6_Tn4M78nIq35fhbIZDVgMoJHHm3Jv54Bz84-BEAfPKVYv4nLhePdijfoYKQ9Y3DZ40g088DcVQYvoo2qiTINFHR_zPNki-Vjp6BwVkZ2lcAv05hKnEAQhx1xoAVxw6XEZr5vkUIc1PMeSttx1UU2xFps5U-eMzp0kgZviNH2AGxTzOmZaXHKTlciQpWr_snhCs-nNkgC2BdHc-YXSE3mubXEBVg0ls7QJM7gY21Qg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBQud-JQhu8owbn32kP89YU21QpjTq1lMCXBtgZB_zN5FTPhUlt5SEX590y4_DBSNMhxaafhqJXXd-VltdRLWEQHDgyRJa_3SGP_F9Bhj0xYWbbVUre-oFVMJZvOahKfVUNHY4LmPsjRH51UGkPLXcRNOWfDa2s1GoqBVDU2xi90DiMxkcAHCk5N3Z7LzVwH7R1d5OmQZ8KL7I1FLQ-aZXvsCTMPUfBqYYgem2lBRGkCntS-cE76ihV8g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC4lhFChkBW3OOdi942PORLHo8HLgkQec_Xt0LMYidb-rCDOlIEWlmlC5H0SVLOoK5spo8sHzDV0rsaoptlT0i3ig2gEf2D8-vNJW8Z8-wNEU-I8foXRg9siwKhdeLUJYtTvn2M_ZzieX9Lu3UGwtElUKkayOM6_RvErkicGlzFESJg6H9MWu--7LFN-sigBl8ycKrfSgu8xSFdFm0q-XCkl4kz_-DNPuuIWrfE1iTRp-fCUGX3U-SlZg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB3E6RemYs_esoDTx3v33pBxsJ6U_qxkmGGrekD7XRww4GMH6KFV_g_XXyYdwCE_3Tr6XYobF0PT8OdGO_Rjcv6a7ze9hoVxwV3AVfNAFQu29iB3ZAizFYAazrzpk5aUVtNj-ksxnn0Ggzby7amqbObrDTts4n3ghfQwcw_f75sE709XCCquuBLc_TFrAQ2ulfh7xoHaIHRnZETIxPkes-hLrL2ox0PjAtnibgHonuJsLSrAjd_Mcodxg',
  'https://lh3.googleusercontent.com/aida/AP1WRLtUlrQpKlMC8YnjupRmQatdfEQDhUnsllN_ue2PMEaoueP1v4YDukmK3P-YsVMBMR2wzSNz2nELnF6Z3jkyOj9aXzoqIIz7BhkazO4X4dEz5qUnKLzZ-9WZQBLNeJX_BHWbB1Q9znukOkr7KzH8QNqEaWj2qgEugas4t7f3DM5QAMjAoHpYP14u8kqCP_7_zilIv9Arqri-31wMOLMHjACobwnbykgl2CgZSh_AI069FU0RiHOSzzjodYoI',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAfP69gmshrqm9my7jkGwIQ5EsGIy5snyRBj7OfWUNH5m4IrDZssmQLH9ZgdiOUKIwBb50DcDx-mSOHZSsukmvUEoXI6La93Xit16j4x7bb5oRmtAuVCKB8lmOWk8zB94EcQyWFcriUOpZn-boN5IzBmpk9FisEEem0_J3DMWLVQ0UK1sIA__WFf2tm9SBdY17A782hCip_58suVKWP8OfbMv9zlhBNA4U1KroXn_zyS6U0mpe-SZS3SQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAy6MdN5UiGUyG2LMjskwElbi85OCHQYEkDrvolb_-cg4m6Gidm1Y2HRmWPQ8B9ncZBteo7pYSyJ6yizStLu6k9f2hma5PVLLlaowhltMa-0__Is5W2OPXPn17bpXxaLdWVgjh71p-zYYt0eLvOzD823oOmet0i9YiGiLN3NuccHpip8fmHjnomGJlKXX5uMX_u35IydlqQ4b2u1qEdMJzCykEYDPiM_ZLbz-e1F3WSpgxgRmYsyBWpaw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAqZwMj59m7-6SoIOQLw22WUr17od9YrAEpY30nns5eZDNGwB49m--sFsVjTLN4vgSDNw5PLecQLCtW10I7HRkQ1UlEmav7hCxT2geFAvKcxdJULlfhWt5SR6OnMj6b4dS9Bjkx1wtt465hIZJT7I1rrauvszG6RmaSn_X897xrb73xpPMAbnyzV-b6wDTEt10LDJZ9f2DbeBpTBMq56qKLvd8G02c-4MyJX3qT-MBKopjFj2G4Do5wKA',
];

export const reviews = [
  {
    id: 1,
    name: 'Alex M.',
    date: 'March 2026',
    rating: 5,
    text: 'Exceptional quality. The cashmere blend is incredibly soft and the fit is perfect. Worth every penny.',
    images: [],
  },
  {
    id: 2,
    name: 'Jordan K.',
    date: 'February 2026',
    rating: 4,
    text: 'Great cap with premium feel. The detailing on the strap is beautiful. Sizing runs slightly large but still looks amazing.',
    images: [],
  },
  {
    id: 3,
    name: 'Sam T.',
    date: 'January 2026',
    rating: 5,
    text: 'This is my third CAPIST cap. The craftsmanship is consistently outstanding. Truly architectural precision in every stitch.',
    images: [],
  },
  {
    id: 4,
    name: 'Riley P.',
    date: 'December 2025',
    rating: 5,
    text: 'The fabric quality is unmatched. Feels like a luxury accessory, not just a cap. Highly recommend the Heritage collection.',
    images: [],
  },
  {
    id: 5,
    name: 'Morgan L.',
    date: 'November 2025',
    rating: 4,
    text: 'Bought the Beige Classic for my husband and he wears it almost every day. The cotton twill is sturdy yet comfortable.',
    images: [],
  },
  {
    id: 6,
    name: 'Casey W.',
    date: 'October 2025',
    rating: 5,
    text: 'The customer service was as premium as the product. Fast shipping, beautiful packaging, and an incredible cap.',
    images: [],
  },
];
