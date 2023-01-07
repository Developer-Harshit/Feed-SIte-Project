// let feedText
// for(i = 0;i< 15;i++){
//     feedText = Math.floor(Math.random()* 3000) + 500
//     console.log(feedText)
// }


// <li id="feed-item">
//     <article>
//         <div id="feed-text">
//             <p></p>
//         </div>
//         <div id="feed-title">
//             <h3></h3>
//         </div>
//     </article>
// </li>
let randomNum

let colorNum = Math.floor(Math.random() * 5)

let feedCount = Math.floor(Math.random() * 20) + 20

const ham1Element = document.querySelector('#ham1')
const ham2Element = document.querySelector('#ham2')

const text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'
const text2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'

const text3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'
const text4 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'
const text5 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'

const text6 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'

const text7 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'
const text8 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'

const textNull2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'
const textNull3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'
const textNull4 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'
const textNull5 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'
const textNull6 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi aliquid asperiores excepturi minima, nesciunt, quod ea laboriosam ex assumenda veritatis ipsam? Nesciunt ut vitae quo id aperiam quis minus, maxime magni eveniet accusamus doloremque voluptatum ab ea veritatis quas sint praesentium dolor saepe odio minima eum? Enim mollitia quasi odio eveniet in itaque aperiam consequatur error, a quae omnis, dicta perferendis, veniam necessitatibus unde molestias ad distinctio? Quasi molestiae sunt dignissimos aut, odit, illum a quaerat distinctio fugit hic optio vel, maiores facilis quas magni nemo. Voluptas neque eius ut, cupiditate fuga dolore qui sequi cumque modi esse impedit! Quaerat, nihil illo molestias id autem officiis necessitatibus perspiciatis eos assumenda incidunt. Dolorem libero pariatur atque accusantium veritatis ad voluptas quo quisquam nihil laborum consequuntur asperiores dolor deserunt dolorum illo similique, velit numquam! In optio quas tempore inventore magnam! Molestias perferendis voluptatem magni perspiciatis labore est? Fugiat, debitis veniam quibusdam unde explicabo, inventore quaerat voluptas nisi nihil dolorum ratione omnis. Obcaecati maxime architecto quod doloribus deleniti omnis quisquam et perferendis ducimus laborum sapiente odit facere iusto, adipisci error necessitatibus itaque quo quos odio rerum, nam sunt ipsum veniam provident? Culpa voluptatem labore eos quam quod error aperiam temporibus, eaque nemo adipisci beatae alias doloribus consequatur facere accusantium ipsum nostrum eveniet laboriosam cupiditate minus illo architecto, explicabo eligendi! Odio voluptatibus repellendus obcaecati nesciunt quod animi unde. Numquam, aliquam provident incidunt eum ullam repudiandae blanditiis nisi reprehenderit ipsum voluptatibus possimus explicabo. Quaerat ad eum beatae inventore ab nulla, nobis dicta rerum eligendi.'

const title1 = 'Lorem ipsum dolor sit amet.'
const title2 = 'Lorem ipsum dolor sit amet consectetur adipisicing.'
const title3 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'

const textArray = [text1, text2, text3, text4, text5, text6, text7, text8, textNull2, textNull3, textNull4, textNull5, textNull6]
const titleArray = [title1, title2, title3]

const wrapperUL = document.querySelector('#feed-wrapper')



for (i = 0; i < feedCount; i++) {
    addFeeds()
}
const colorList = ['blue', 'green', 'red', 'yellow', 'violet']
const feedItems = document.querySelectorAll('.feed-item')

feedColor()

ham2Element.style.display = 'none'
ham1Element.addEventListener('click', ham1Disable)
ham2Element.addEventListener('click', ham2Disable)

// const hamElements = document.querySelectorAll('.ham')
// for (const hamElement of hamElements) {
//     console.dir(hamElement)
//     hamElement.addEventListener('click', hamDisable)
// }