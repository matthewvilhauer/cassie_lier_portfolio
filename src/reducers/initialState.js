export default {
  authors: [],
  courses: [],
	projects: [
		{
			id: 1,
			title: 'model Fox',
			images: [
				{
					src: '/images/3d_fox_1_of_4.jpg',
					name: 'model Fox 1 of 4'
				},
				{
					src: '/images/3d_fox_2_of_4.jpg',
					name: 'model Fox 2 of 4'
				},
			],
			thumbnail: '/thumbnails/3d_fox_1_of_4.jpg',
			description: 'model images designed with Maya'
		},
		{
			id: 2,
			title: 'Schooley Mountain Band at Arlene\'s',
			images: [
				{
					src: '/images/schooley_arlene.jpg',
					name: 'Showbill 1'
				},
				{
					src: '/images/schooley_arlenes.png',
					name: 'Showbill 2'
				},
			],
			description: 'Showbills designed for The Schooley Mountain Band'
		},
		{
			id: 3,
			title: 'Ghost in the Mirror',
			images: [
				{
					src: '/images/ghost_in_the_mirror.jpg',
					name: 'Showbill 1'
				}
			],
			description: 'Part of the ghost story illustration series'
		},
		{
			id: 4,
			title: 'Phonograph',
			images: [
				{
					src: '/images/phonograph.jpg',
					name: 'Phonograph'
				}
			],
			description: '...'
		},
		{
			id: 5,
			title: 'Maya Fishbowl',
			images: [
				{
					src: '/images/maya_2016.jpg',
					name: 'Maya Fishbowl'
				}
			],
			description: 'Designed with Maya'
		},
		{
			id: 6,
			title: 'Pink Moon T-shirt',
			images: [
				{
					src: '/images/pink_moon_tshirt.jpg',
					name: 'Pink Moon T-shirt'
				}
			],
			description: 'T-shirt designed for the 7th annual Pink Moon Festival.'
		},
		{
			id: 7,
			title: 'model Fox',
			images: [
				{
					src: '/images/3d_fox_1_of_4.jpg',
					name: 'model Fox 1 of 4'
				},
				{
					src: '/images/3d_fox_2_of_4.jpg',
					name: 'model Fox 2 of 4'
				},
			],
			description: 'model images designed with Maya'
		},
		{
			id: 8,
			title: 'Schooley Mountain Band at Arlene\'s',
			images: [
				{
					src: '/images/schooley_arlene.jpg',
					name: 'Showbill 1'
				},
				{
					src: '/images/schooley_arlenes.png',
					name: 'Showbill 2'
				},
			],
			description: 'Showbills designed for The Schooley Mountain Band'
		},
		{
			id: 9,
			title: 'Ghost in the Mirror',
			images: [
				{
					src: '/images/ghost_in_the_mirror.jpg',
					name: 'Showbill 1'
				}
			],
			description: 'Part of the ghost story illustration series'
		}
	],
	models: [
		{
			id: 1,
			title: 'model Fox',
			pages: ['projects', 'posters'],
			images: [
				{
					id: 1,
					src: 'images/3d_fox_1_of_4.jpg',
					thumbnail: 'images/3d_fox_1_of_4.jpg',
					srcset: [
						'images/3d_fox_1_of_4.jpg',
					],
					caption: 'Test',
					isPreviewImage: true,
				},
				{
					id: 2,
					src: 'images/3d_fox_2_of_4.jpg',
					thumbnail: 'images/3d_fox_2_of_4.jpg',
					srcset: [
						'images/3d_fox_2_of_4.jpg',
					],
					caption: 'Test',
					isPreviewImage: false,
				},
				{
					id: 3,
					src: 'images/3d_fox_3_of_4.jpg',
					thumbnail: 'images/3d_fox_3_of_4.jpg',
					srcset: [
						'images/3d_fox_3_of_4.jpg',
					],
					caption: 'Test',
					isPreviewImage: false,
				}
			],
			thumbnail: '/thumbnails/3d_fox_1_of_4.jpg',
			description: 'model images designed with Maya'
		},
		{
			id: 2,
			title: 'model Fox2',
			pages: ['projects', 'illustrations'],
			images: [
				{
					id: 1,
					src: 'images/3d_fox_1_of_4.jpg',
					thumbnail: 'images/3d_fox_1_of_4.jpg',
					srcset: [
						'images/3d_fox_1_of_4.jpg',
					],
					caption: 'Test',
					isPreviewImage: true,
				},
				{
					id: 2,
					src: 'images/3d_fox_2_of_4.jpg',
					thumbnail: 'images/3d_fox_2_of_4.jpg',
					srcset: [
						'images/3d_fox_2_of_4.jpg',
					],
					caption: 'Test',
					isPreviewImage: false,
				},
				{
					id: 3,
					src: 'images/3d_fox_3_of_4.jpg',
					thumbnail: 'images/3d_fox_3_of_4.jpg',
					srcset: [
						'images/3d_fox_3_of_4.jpg',
					],
					caption: 'Test',
					isPreviewImage: false,
				}
			],
			thumbnail: '/thumbnails/3d_fox_1_of_4.jpg',
			description: 'model images designed with Maya'
		}
	],
	illustrations: [
		{
			id: 1,
			title: 'model Fox',
			images: [
				{
					src: '/images/3d_fox_1_of_4.jpg',
					name: 'model Fox 1 of 4'
				},
				{
					src: '/images/3d_fox_2_of_4.jpg',
					name: 'model Fox 2 of 4'
				},
			],
			description: 'model images designed with Maya'
		},
		{
			id: 2,
			title: 'Schooley Mountain Band at Arlene\'s',
			images: [
				{
					src: '/images/schooley_arlene.jpg',
					name: 'Showbill 1'
				},
				{
					src: '/images/schooley_arlenes.png',
					name: 'Showbill 2'
				},
			],
			description: 'Showbills designed for The Schooley Mountain Band'
		}
	],
	posters: [
		{
			id: 1,
			title: 'Schooley at Arlene\'s - Spring 2016',
			images: [
				{
					src: '/images/schooley_arlenes.jpg',
					name: 'Showbill 1'
				}
			],
			description: 'Showbill designed for The Schooley Mountain Band at Arelene\'s on May 6th, 2016.'
		},
		{
			id: 2,
			title: 'Schooley Mountain Band at Arlene\'s - Summer 2016',
			images: [
				{
					src: '/images/schooley_arlene.jpg',
					name: 'Showbill 2'
				}
			],
			description: 'Showbill designed for The Schooley Mountain Band at Arelene\'s on July 29th, 2016.'
		},
		{
			id: 3,
			title: 'Southern Belles - Fall Tour 2016',
			images: [
				{
					src: '/images/southern_belles_fall_2016.jpg',
					name: 'Southern Belles - Fall Tour 2016'
				}
			],
			description: 'Showbill designed for The Southern Belles Fall 2016 tour.'
		},
		{
			id: 4,
			title: 'Damn Tall Buildings & Red Light Rodeo - Fall 2016',
			images: [
				{
					src: '/images/jet_trails_media.jpg',
					name: 'Damn Tall Buildings & Red Light Rodeo - August 20th, 2016'
				}
			],
			description: 'Showbill designed for Jet Trails Media show.'
		},
		{
			id: 5,
			title: 'Litz, Moogatu, & Microwaves - Fall 2016',
			images: [
				{
					src: '/images/litz_moogatu.jpg',
					name: 'Litz, Moogatu, & Microwaves - November 12th, 2016'
				}
			],
			description: 'Showbill designed for Jet Trails Media show.'
		},
		{
			id: 6,
			title: 'Denizen Release Show - Winter 2017',
			images: [
				{
					src: '/images/schooley_denizen.jpg',
					name: 'Denizen, Schooley Mountain Band, and Femur - January 28th, 2017'
				}
			],
			description: 'Showbill designed for Denizen Release Show featuring The SChooley Mountain Band and Femur.'
		},
		{
			id: 7,
			title: 'Schooley Mountain Band at Arlene\'s - January 2017',
			images: [
				{
					src: '/images/schooley_jouwala.jpg',
					name: 'Schooley Mountain Band at Arlene\'s - January 6th, 2017'
				}
			],
			description: 'Showbill designed for Schooley Mountain Band Show at Arelene\'s on January 6th, 2017.'
		},
	],
	lightboxIsOpen: true
};

// images: [
// 				{
// 					src: '/images/3d_fox_1_of_4.jpg',
// 					thumbnail: '/images/3d_fox_1_of_4.jpg'
// 				},
// 				{
// 					src: '/images/3d_fox_1_of_4.jpg',
// 					thumbnail: '/images/3d_fox_1_of_4.jpg'
// 				},
// 			],
