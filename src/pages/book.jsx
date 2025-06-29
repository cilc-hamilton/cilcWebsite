import Header from "../components/header"
import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import Book from "../components/book";
 
const Books=() => {
    return (
        <>
            <div className="flex flex-col w-screen absolute top-0 min-[900px]:top-36">
                <Header image="" color="cilcpurple"/>
                <Section color="white">
                    <Card color="cilcpurple">
                        <h3 className="text-white">Our top book recommendations for students, by recommended age:</h3>
                        <hr className="bg-white"/>
                        <ul className="list-inside w-full text-white underline">
                            <li className="cursor-pointer"
                                onClick = {()=>{
                                    window.scrollTo({
                                        top: document.querySelector("#ages46").offsetTop,
                                        behavior: "smooth",
                                    })
                                }}
                            >Ages 4-6</li>
                            <li className="cursor-pointer"
                                onClick = {()=>{
                                    window.scrollTo({
                                        top: document.querySelector("#ages68").offsetTop,
                                        behavior: "smooth",
                                    })
                                }}
                            >Ages 6-8</li>
                            <li className="cursor-pointer"
                                onClick = {()=>{
                                    window.scrollTo({
                                        top: document.querySelector("#ages812").offsetTop,
                                        behavior: "smooth",
                                    })
                                }}
                            >Ages 8-12</li>
                            <li className="cursor-pointer"
                                onClick = {()=>{
                                    window.scrollTo({
                                        top: document.querySelector("#ages12").offsetTop,
                                        behavior: "smooth",
                                    })
                                }}
                            >Ages 12+</li>
                        </ul>
                    </Card>
                </Section>
                <Section color="cilcgrey">
                    <h3 id="ages46">Ages 4-6</h3>
                    <hr className="bg-deepblue"/>
                    <div className="grid w-full h-fit gap-8 grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
                        <Book
                            title="Alma and How She Got Her Name"
                            author="Juana Martinez-Neal"
                            summary="This story tells of a little girl who has a very long name. Her dad explains each part of her name and helps her to understand the history of her name."
                        />
                        <Book
                            title="All Are Welcome"
                            author="Alexandra Penfold"
                            summary="This book is a story of a day in an extremely diverse classroom. It has a really wonderful message about embracing our differences."
                        />
                        <Book
                            title="And Tango Makes Three"
                            author="Peter Parnell and Justin Richardson"
                            summary="This book is a story of a day in an extremely diverse classroom. It has a really wonderful message about embracing our differences."
                        />
                        <Book
                            title="Awâsis and the World-Famous Bannock"
                            author="Dallas Hunt and Amanda Strong"
                            summary="Follow Awâsis as his grandma's world-famous bannock is lost. He encounters many different animals along his journey."
                        />
                        <Book
                            title="A World of Kindness"
                            author="Editors & Illustrators of Pajama Press"
                            summary="Follow Awâsis as his grandma's world-famous bannock is lost. He encounters many different animals along his journey."
                        />
                        <Book
                            title="The Day You Begin"
                            author="Jacqueline Woodson"
                            summary="There will be times when you walk into a room and no one there is quite like you. You may feel like an outsider because of the way you look, the way you dress, what you eat or even for a random reason. This book encourages us to be brave and share our stories."
                        />
                        <Book
                            title="I am Perfectly Designed"
                            author="Karamo Brown"
                            summary="A boy and his father take a walk, discovering all the ways in which they are perfectly designed for each other. The illustrations showcase the warmth of city life with an abundance of diverse families."
                        />
                        <Book
                            title="It Feels Good to Be Yourself"
                            author="Theresa Thorn"
                            summary="Some people are boys. Some people are girls. Some people are both, neither, or somewhere in between. This book explores gender identity and will give children a fuller understanding of themselves and others."
                        />
                        <Book
                            title="It's Okay to Be Different"
                            author="Todd Parr"
                            summary="This story is a celebration of the diversity in the human race."
                        />
                        <Book
                            title="Kindness is my Superpower"
                            author="Alicia Ortego"
                            summary="This book encourages children to be more understanding for others, accept diversity, thrive in a multicultural environment, and to show more empathy."
                        />
                        <Book
                            title="My Princess Boy"
                            author="Cheryl Kilodavis"
                            summary="This story is a great way to introduce children to tolerance and acceptance, and also to help them celebrate their own differences or uniqueness."
                        />
                        <Book
                            title="Pink is for Boys"
                            author="Robb Pearlman"
                            summary="This book reframes the stereotypical blue/pink gender binary and empowers kids—and their grown-ups—to express themselves in every color of the rainbow."
                        />
                        <Book
                            title="The Proudest Blue: A Story of Hijab and Family"
                            author="Ibtihaj Muhammad"
                            summary="It's the first day of school for two sisters. It is also the older girls first day of hijab—a hijab of beautiful blue fabric. This story tells of family and being proud of who you are."
                        />
                        <Book
                            title="Sulwe"
                            author="Lupita Nyong'o"
                            summary="This book begins with a little girl who wishes that her dark skin was lighter. It is a book about self-esteem and understanding one's unique beauty."
                        />
                        <Book
                            title="The Rabbit Listened"
                            author="Cori Doerrfeld"
                            summary="When something sad happens, Taylor doesn't know where to turn. All the animals are sure they have the answer, but ultimately it is Rabbit who helps him. A picture book about empathy and kindness."
                        />
                        <Book
                            title="Violet"
                            author="Tania Duprey Stehlik"
                            summary="When Violet's Dad picks her up from school, one of the other kids asks, “How come your Dad is blue and you're not?"
                        />
                        <Book
                            title="You Hold Me Up"
                            author="Monique Gray Smith"
                            summary="This simple story by an Indigenous author encourages respect."
                        />
                    </div>
                </Section>
                <Section color="white">
                    <h3 id="ages68">Ages 6-8</h3>
                    <hr className="bg-deepblue"/>
                    <div className="grid w-full h-fit gap-8 grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
                        <Book
                            title="All the Colors We Are"
                            author="Katie Kissinger"
                            summary="This book explains the science behind a person's skin colour using easy-to-understand language. It expands on how people may get their skin colour in three different ways: ancestry, sun, and melanin."
                        />
                        <Book
                            title="All You Need is Love"
                            author="Shanni Collins"
                            summary="This book combines stories that were written and inspired by real people. It describes many different types of families. Overall, the message of this book is love, acceptance, and kindness."
                        />
                        <Book
                            title="Are You a Boy or Are You a Girl"
                            author="Fox Fisher"
                            summary="This book is about a child named Tiny, who's family has just moved to a new town. Tiny is made fun of for not conforming to male or female stereotypes. This is a great book for teaching children that it is not about what you wear or what you like, but ultimately, about being a good person."
                        />
                        <Book
                            title="Bilal Cooks Daal"
                            author="Aisha Saeed"
                            summary="This book is about a young Pakistani boy named Bilal who is making his favourite dish Pakistani, daal, alongside his non-Pakistani friends. While making the dish, Bilal overhears his friends say that they dislike the smell of daal. More and more of his friends come over and Bilal nervously waits for the dish to be ready to see how his friends like it. This book offers good insight on different cultural foods and how other cultures react to it."
                        />
                        <Book
                            title="Children of Our World"
                            author="Hanane Kai and Louise Spilsbury"
                            series="Books in this series: Poverty and Hunger, Refugees and Migrants, Global Conflict, and Racism and Intolerance"
                            summary="The series teaches children about caring for others and demonstrates that not everybody has the same opportunities as others. These books also indicate many good websites that could help children learn more about different people around the world."
                        />
                        <Book
                            title="Common Threads: Adam's Day at the Market"
                            author="Huda Essa"
                            summary="Adam and his family spend an exciting day at the colorful and bustling Eastern Market. But when Adam gets briefly separated from Mom and Dad, he mistakes a friendly, diverse cast of characters for his parents in their traditional Muslim clothing. This nearly wordless picture book celebrates diversity and community in vibrant, dynamic art."
                        />
                        <Book
                            title="From Far Away"
                            author="Saoussan Askar and Robert Munsch"
                            summary="This story is the true story of Saoussan. It tells how she felt when she first came to Canada from Lebanon because of war. She has a hard time adjusting because she didn't speak English. This story is great to help students understand about how hard it can be to move to a new country when they don't understand the traditions and cultures."
                        />
                        <Book
                            title="Gift Days"
                            author="Kari-Lynn Winters"
                            summary="After her mother's death, Nassali has to do chores and help her sisters while her brothers get to go to school, until one of her brothers gives her “gift days” where he does chores before school, so she can listen to the lessons at school. At the end of the book, it talks about the UN Convention on the Rights of the Child and shows us how some children are not getting those rights."
                        />
                        <Book
                            title="Irena Sendler and the Children of the Warsaw Ghetto"
                            author="Susan Goldman Rubin"
                            summary="An amazing true story about Irena Sendler who saved many Jewish children during the Holocaust. She helped convince the parents in the ghetto to let her bring their children out of the area. She saved many children by bringing them to other families to be raised as non-Jewish."
                        />
                        <Book
                            title="It's Hard Not to Stare: Helping Children Understand Disabilities"
                            author="Tim Huff"
                            summary="This book teaches children that different people have different abilities. The illustrations in this book are great as well. There are also great discussion questions that can generate a conversation and activities. This book emphasizes that people may have physical disabilities, but we should embrace their differences as unique and learn more about them."
                        />
                        <Book
                            title="It's Our Nature"
                            author="Rebeca Orozco"
                            summary="This book focuses on many animals that experience many of the same emotions as we do such as worry, fear, and love. This is a great book because it teaches children about different animal behaviours as well as emphasizes things that we humans (who are also animals) do."
                        />
                        <Book
                            title="Jacob's Series"
                            author="Ian Hoffman and Sarah Hoffman"
                            series="Books in this series: Jacob's New Dress, Jacob's Room to Choose, Jacob's School Play, and Jacob's Missing Book"
                            summary="This series teaches students about LGBTQ+ and book-banning issues in a relatable school setting."
                        />
                        <Book
                            title="Jacqueline and the Beanstalk"
                            author="Brenda Miles and Susan Sweet"
                            summary="Jacqueline, a princess, is overprotected by the royal knights. One night, Jacqueline comes across a beanstalk and wants to climb it. The knights try to warn her that there is a Giant who is dangerous because he is 'different', but she points out that they may not be able to confirm this if they never meet him. This is a creative take on a classic fairy tale."
                        />
                        <Book
                            title="Know Me"
                            author="Linda Briden"
                            summary="Know Me asks essential questions in the voice of a child. This empowering approach invites sharing between children and their peers, parents and teachers - anyone who cares to ask. Pick any page and enter into the “Know Me” journey of self-awareness to a place where differences are embraced and understanding is promoted."
                        />
                        <Book
                            title="Layla's Head Scarf"
                            author="Miriam Cohen"
                            summary="This is a timely story which highlights a challenge that many children face in today's multicultural environment. Layla, a new girl in first grade, wears a headscarf. But soon she is welcomed by her new classmates."
                        />
                        <Book
                            title="Let's Talk About Race"
                            author="Julius Lester"
                            summary="The main message of the book is that if we were stripped down to only our bones, we would all look the same. Lester goes through parts of his story and talks about how race is a part of everyone's story. He talks about how some races think they are better than others. Then, he invites everyone to pretend to take off their skin, and ultimately see that inside we are all the same."
                        />
                        <Book
                            title="Love is Love"
                            author="Michael Genhart, PhD"
                            summary="Love is Love follows the journey of a boy, who is the son of a gay couple, as he wrestles with feeling ashamed or embarrassed about wearing a shirt with a pride heart. His friend does not understand and she suggests he just stop wearing the shirt. This starts him wondering why people may think having two dads is wrong. He compares his family to his friend's family and concludes that love is love. The story incorporates the important message that all forms of love are equal, no matter who is involved and that a family can take multiple different forms."
                        />
                        <Book
                            title="On the Playground"
                            author="Dr. Jillian Roberts"
                            summary="The book outlines in a child friendly manner the ideas of prejudice and harassment and defines them for the reader. It also explains how these ideas are passed down through generations. Formal definitions and facts are included in text boxes to emphasize the main themes. The second half of the book is about how the reader can help victims of prejudice and harassment. Overall, the book emphasizes “a true sense of belonging”, and how a society cannot be equitable unless people of all different backgrounds are accepted and respected."
                        />
                        <Book
                            title="Race Cars"
                            author="Jenny Devenny"
                            summary="This book talks about the issues of race through the use of race cars. The author, a social worker, uses cars to represent people, and introduce the idea of white privilege. This book would be great for children to read with adults. On the surface, it seems like it's just a book about cars who want to race, but it is actually an allegory for how white and black people are treated differently."
                        />
                        <Book
                            title="Something Happened in Our Town"
                            author="Marianne Celano, Marietta Collins, Ann Hazzard, and Jennifer Zivoin"
                            summary="The book centers around a white family and a black family, who, after a shooting in their community, both discuss how their children can prevent prejudice from thriving in their environments. The second half of the book provides resources and questions for discussion - questions a child might ask and possible responses. It also provides a special guide for African-American families."
                        />
                        <Book
                            title="The Together Tree"
                            author="Aisha Saeed"
                            summary="Based on her the author's son's experiences with bullying, The Together Tree is the story of Rumi. At first when he comes to a new school, the kids tease him and make fun of him. He sits under a tree alone. But gradually everyone learns to play together. This is a great book for children to read on their own or a for teachers to read with their students. It encourages students to stand up when they see bullying occur and for children who are bullied to tell someone."
                        />
                    </div>
                </Section>
                <Section color="cilcgrey" id="ages-8-12">
                    <h3 id="ages812">Ages 8-12</h3>
                    <hr className="bg-deepblue"/>
                    <div className="grid w-full h-fit gap-8 grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
                        <Book
                            title="Amal Unbound"
                            author="Aisha Saeed"
                            summary="Amal is a regular girl living in Pakistan going to school. One day she angers the son of the head of her village, and has to join his household as a servant. Children will learn about how things are different for kids in other countries. They don't all get to have the same privileges we do like going to school."
                        />
                        <Book
                            title="Amina's Voice"
                            author="Hena Khan"
                            summary="Amina has never been comfortable in the spotlight. She is happy just hanging out with her best friend, Soojin. Except now that she's in middle school everything feels different. Soojin is suddenly hanging out with Emily, one of the “cool” girls in the class, and even talking about changing her name to something more “American.” Does Amina need to start changing too?"
                        />
                        <Book
                            title="Betty Before X"
                            author="Ilyasah Shabazz"
                            summary="Written by Malcolm X's daughter about her mother, Betty, before she married Malcolm X, the novel illustrates events in Betty's young life. Betty, growing up in the 1940s, learns a lot about discrimination and racism. Betty becomes a junior member of a group who encourages Black people to only buy from businesses that will hire Black people. This book shows how Betty already had a sense of equality and justice before she met Malcolm X."
                        />
                        <Book
                            title="The Boy At the Back of the Class"
                            author="Onjali Q Rauf"
                            summary="There is an empty chair at the back of the classroom until one day, a new boy, a refugee, Ahmet, arrives. He doesn't speak their language but gradually becomes friends with the narrator and her friends. When they find out that the “gates” will be closed to refugees and Ahmet's parents may not be able to come, they hatch a plan that includes appealling to the Queen to get help for Ahmet. The author was inspired by real stories about refugees."
                        />
                        <Book
                            title="Dark Sky Rising"
                            author="Henry Louis Gates Jr."
                            summary="The author delves into the achievement of racial equity during the “Reconstruction Era,” otherwise known as the post-Jim Crow era, which ended with high rates of white supremacy and new forms of oppression. Throughout the book, the author describes black liberation movements and organizations strengthened their voices, yet endured violent threats from a white-majority society and government."
                        />
                        <Book
                            title="Esperanza Rising"
                            author="Pam Muñoz Ryan"
                            summary="This book is based on the true story of the author's grandmother. In 1930, Esperanza had a great life in Mexico, but her father is killed by bandits, and her whole life changes. She and her mother travel to California with their former servants to find work. Esperanza has to learn to adjust to her new life. Throughout it all, she has to persevere."
                        />
                        <Book
                            title="The First Rule of Punk"
                            author="Celia C. Perez"
                            summary="Malu has to move with her Mom to Chicago, away from her Dad. She feels like she doesn't fit in with her half-Mexican side represented by her Mom, and is more like her dad, who is into music like her. But gradually, after making friends and deciding to form a punk band with them to audition for the school talent show, she learns that it's okay for her to simply be herself."
                        />
                        <Book
                            title="Fish in a Tree"
                            author="Lynda Mullaly Hunt"
                            summary="Ally has always struggled to read. She's always had to hide that from teachers and classmates, until one day, she gets a new teacher, Mr. Daniels, who understands that she has dyslexia, and that she simply learns differently. With a few new friends alongside her, she learns to feel better about herself and confront the class bully."
                        />
                        <Book
                            title="Front Desk Series"
                            author="Kelly Yang"
                            series="Books in this series: Front Desk, Three Keys, Room to Dream, Key Player, Top Story"
                            summary="This series is partially based on the Author's experiences as an immigrant. She befriends Lupe, another immigrant. Throughout the series, she fights many roadblocks: she lives in a motel managed by her parents, and has to deal with the motel's pretentious owner and struggling financial situation; she wants to become a writer, but English isn't her first language; she fights against anti-immigration laws; she also has to deal with her identity as an immigrant."
                        />
                        <Book
                            title="Harbor Me"
                            author="Jacqueline Woodson"
                            summary="On Friday afternoons, six children are brought into the ARYT room, “A Room to Talk.” At first, Haley and her classmates don't want to talk, but they all gradually gain confidence and begin to share. Each of the kids is struggling with something different, but they are all searching for the same thing - feeling like they belong."
                        />
                        <Book
                            title="The House That Lou Built"
                            author="Mae Respicio"
                            summary="Lou likes to build, like her father did. She wants to build a house on the land she inherited from her father, so she and her mother will have a place to live. But now her mom got a job somewhere else and they will have to move and leave her Filipino extended family and her land behind in San Francisco, unless she can get her house built and the taxes paid on her land."
                        />
                        <Book
                            title="It All Comes Down to This"
                            author="Karen English"
                            summary="It's the summer of 1965 in Los Angeles. Sophie's family has just moved into a predominantly white neighbourhood. Her sister, who can pass for white, is going away to college soon. Her best friend, who is white, is making friends with kids who don't like Sophie because of her skin colour. Sophie deals with changes to her body and her family situation as well as learning about what it means to be black in America."
                        />
                        <Book
                            title="Marcus Vega Doesn't Speak Spanish"
                            author="Pablo Cartaya"
                            summary="Everyone is scared of Marcus because he's bigger than his peers. After Marcus gets in a fight defending his brother after he was called a racial slur, he is suspended, so his mom decides to take the boys down to Puerto Rico for spring break. They will get to see his father's family and Marcus hopes to reconnect with his father. The week changes his life and shows him he can belong."
                        />
                        <Book
                            title="New Kid"
                            author="Jerry Craft"
                            summary="This is a graphic novel about 7th grader Jordan, who wanted to go to Art School, but instead gets sent to a private school, Riverdale Academy Dale School. He is one of the few black kids and he finds it hard to fit in at first. He also has to balance spending time with his old friends and his new friends. Gradually, he makes friends and doesn't feel like the New Kid anymore."
                        />
                        <Book
                            title="Not My Idea: A Book About Whiteness"
                            author="Anastasia Higginbotham"
                            summary="This book addresses the idea of whiteness in a way children will understand. The author shows that people are all equal, regardless of skin colour. This book teaches children how they can make the world a better place. Younger children could read it with parents or teachers to help them understand the concept."
                        />
                        <Book
                            title="OCDaniel"
                            author="Wesley King"
                            summary="Daniel is the waterboy for his school team. He spends most of the time hoping no one will notice his strange habits, not realizing he has OCD. Writing is the only thing that makes sense for him. When he gets a note from another student asking for help, everything might change for him."
                        />
                        <Book
                            title="Other Words for Home"
                            author="Jasmine Warga"
                            summary="Jade and her mother flee their home in Syria to live with relatives in America. But her father and brother stay behind - her father because he runs a store, her brother to fight for freedom. Told in poetry, Jasmine talks about leaving her home behind and being in America. She faces new experiences, including a new baby sister and encountering Islamophobia."
                        />
                        <Book
                            title="The Stars Beneath Our Feet"
                            author="David Barclay Moore"
                            summary="Wallace “Lolly” Rachpaul lives in the projects in the Harlem. Now that he's 12, things are about to get a lot more difficult for him. Still dealing with his brother's death, he begins to use his legos to build imaginary cities. In his after school program, a girl named Rose also uses his legos to build. While at first he is annoyed, soon they become friends. Lolly learns to deal with his grief and that he could be an artist and make something of himself."
                        />
                    </div>
                </Section>
                <Section color="white" id="ages-12+">
                    <h3 id="ages12">Ages 12+</h3>
                    <hr className="bg-deepblue"/>
                    <div className="grid w-full h-fit gap-8 grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
                        <Book
                            title="Habibi"
                            author="Naomi Shihab Nye"
                            summary="Lilyana and her family move from America to Palestine, where her father was born. Lilyana has to learn Arabic and learn to fit in at her new school. She meets a Jewish boy and her whole life changes. This book combines romance and different cultures, set against the background of the ongoing Palestinian-Israeli conflict."
                        />
                        <Book
                            title="The Poet X"
                            author="Elizabeth Acevedo"
                            summary="This book is written in verse. Xiomera, known as X, is a Dominican-American teenager, who lives in Harlem and loves to write poetry. Both she and her twin brother, Xavier, are dealing with different things. She is dealing with new romance and her struggles with her mother. Teenagers will find X relatable."
                        />
                        <Book
                            title="X"
                            author="Ilyasah Shabazz with Kekla Magoon"
                            summary="This book will introduce teenagers to Malcolm X, who was once a teenager just like them. The book also includes historical context, notes about the historical figures, timelines, family trees and recommendations for further reading."
                        />
                    </div>
                </Section>
                <Footer/>
            </div>
        </>
    );
};
 
export default Books;