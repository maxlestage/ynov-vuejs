<template>
  <main>
    <section class="panel_user">
      <div>
        <UserData v-for="item in userData.users" :key="item._id" :userData="item"
                  @images="catchEmit" />
        <Gallery v-for="item in returnedEmit.gallery" :key="item._id" :userData="item" class="gallery-stock" />
      </div>
    </section>
  </main>
</template>
<script setup>
import { reactive, ref, watchEffect } from 'vue'

import UserData from '../atoms/UserData.vue'
import Gallery from '@/atoms/Gallery.vue'

const returnedEmit = ref({})


const catchEmit = (i) => {
  return returnedEmit.value = i
}

watchEffect(() => console.log('returnedEmit.value : ', returnedEmit.value))
const userData = reactive({
  users: [
    {
      _id: '60d5ecb4a7b7947e0f000001',
      created_at: '2024-02-22T12:00:00Z',
      first_name: 'John',
      last_name: 'Doe',
      username: 'johndoe',
      email: 'john.doe@example.com',
      mobile: '1234567890',
      password: 'password123',
      securitykey: 'securitykey123',
      birth_date: '1990-01-01T00:00:00Z',
      biography: 'Bio about John Doe',
      location: {
        x: '12.34',
        y: '56.78'
      },
      area_location: 1,
      school_grade: 'A',
      employeer: 'Tech Company',
      company_role: 'Developer',
      sexuality: 'Heterosexual',
      gender: 'Male',
      like: [
        {
          user_id: '60d5ecb4a7b7947e0f000002'
        }
      ],
      liked_by: [
        {
          user_id: '60d5ecb4a7b7947e0f000003'
        }
      ],
      dislike: [
        {
          user_id: '60d5ecb4a7b7947e0f000004'
        }
      ],
      dislike_by: [
        {
          user_id: '60d5ecb4a7b7947e0f000005'
        }
      ],
      gallery: {
        images: [
          {
            _id: null,
            link: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'
          },
          {
            _id: null,
            link: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'
          },
          {
            _id: null,
            link: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'
          }
        ]
      },
      grade: 'Free',
      conversation: [
        {
          _id: '60d5ecb4a7b7947e0f000006',
          participant_ids: ['60d5ecb4a7b7947e0f000007'],
          messages: [
            {
              _id: '60d5ecb4a7b7947e0f000008',
              sender_id: '60d5ecb4a7b7947e0f000007',
              text: 'Hello, world!',
              timestamp: '2024-02-22T12:00:00Z'
            }
          ]
        }
      ]
    }
    // {
    //   _id: '60d5ecb4a7b7947e0f000009',
    //   created_at: '2024-02-22T12:00:00Z',
    //   first_name: 'Jane',
    //   last_name: 'Doe',
    //   username: 'janedoe',
    //   email: 'jane.doe@example.com',
    //   mobile: '0987654321',
    //   password: 'password456',
    //   securitykey: 'securitykey456',
    //   birth_date: '1992-02-22T00:00:00Z',
    //   biography: 'Bio about Jane Doe',
    //   location: {
    //     x: '11.22',
    //     y: '55.66'
    //   },
    //   area_location: 2,
    //   school_grade: 'B',
    //   employeer: 'Healthcare',
    //   company_role: 'Nurse',
    //   sexuality: 'Heterosexual',
    //   gender: 'Female',
    //   like: [
    //     {
    //       user_id: '60d5ecb4a7b7947e0f00000a'
    //     }
    //   ],
    //   liked_by: [
    //     {
    //       user_id: '60d5ecb4a7b7947e0f00000b'
    //     }
    //   ],
    //   dislike: [
    //     {
    //       user_id: '60d5ecb4a7b7947e0f00000c'
    //     }
    //   ],
    //   dislike_by: [
    //     {
    //       user_id: '60d5ecb4a7b7947e0f00000d'
    //     }
    //   ],
    //   gallery: {
    //     images: [
    //       {
    //         _id: null,
    //         link: 'http://example.com/image2.jpg'
    //       }
    //     ]
    //   },
    //   grade: 'EarlyBird',
    //   conversation: [
    //     {
    //       _id: '60d5ecb4a7b7947e0f00000e',
    //       participant_ids: ['60d5ecb4a7b7947e0f00000f'],
    //       messages: [
    //         {
    //           _id: '60d5ecb4a7b7947e0f000010',
    //           sender_id: '60d5ecb4a7b7947e0f00000f',
    //           text: 'Hello, Jane!',
    //           timestamp: '2024-02-22T12:00:00Z'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   _id: '60d5ecb4a7b7947e0f000011',
    //   created_at: '2024-02-22T12:00:00Z',
    //   first_name: 'Alice',
    //   last_name: 'Smith',
    //   username: 'alicesmith',
    //   email: 'alice.smith@example.com',
    //   mobile: '1122334455',
    //   password: 'password789',
    //   securitykey: 'securitykey789',
    //   birth_date: '1995-03-22T00:00:00Z',
    //   biography: 'Bio about Alice Smith',
    //   location: {
    //     x: '13.45',
    //     y: '54.32'
    //   },
    //   area_location: 3,
    //   school_grade: 'C',
    //   employeer: 'Retail',
    //   company_role: 'Sales Associate',
    //   sexuality: 'Heterosexual',
    //   gender: 'Female',
    //   like: [
    //     {
    //       user_id: '60d5ecb4a7b7947e0f000012'
    //     }
    //   ],
    //   liked_by: [
    //     {
    //       user_id: '60d5ecb4a7b7947e0f000013'
    //     }
    //   ],
    //   dislike: [
    //     {
    //       user_id: '60d5ecb4a7b7947e0f000014'
    //     }
    //   ],
    //   dislike_by: [
    //     {
    //       user_id: '60d5ecb4a7b7947e0f000015'
    //     }
    //   ],
    //   gallery: {
    //     images: [
    //       {
    //         _id: null,
    //         link: 'http://example.com/image3.jpg'
    //       }
    //     ]
    //   },
    //   grade: 'Plus',
    //   conversation: [
    //     {
    //       _id: '60d5ecb4a7b7947e0f000016',
    //       participant_ids: ['60d5ecb4a7b7947e0f000017'],
    //       messages: [
    //         {
    //           _id: '60d5ecb4a7b7947e0f000018',
    //           sender_id: '60d5ecb4a7b7947e0f000017',
    //           text: 'Hello, Alice!',
    //           timestamp: '2024-02-22T12:00:00Z'
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]
})
</script>

<style scoped>
.panel_user,
.user {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
}

.panel_user div,
.user div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.panel_user div > div,
.user div > div {
  flex: 1 1;
  margin-bottom: 0px;
  background-color: #9401AE5B;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.panel_user div > div:last-child,
.user div > div:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .panel_user div > div,
  .user div > div {
    flex: 1 1 100%;
  }
}

/* Styles spécifiques pour les composants UserData et Gallery */
.userData,
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.userData img,
.gallery img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.userData h2,
.gallery h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.userData p,
.gallery p {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.gallery-stock {
  margin: 12px;
  padding: 25%;
}
</style>
