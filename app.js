const App = () => {
    const [showAttributes, setShowAttributes] = React.useState(false); // Для управления отображением страницы "Атрибуты"
    const [showAttributeInfo, setShowAttributeInfo] = React.useState(false); // Для управления описанием атрибутов
    const [showAchievments, setShowAchievments] = React.useState(false); // Достижения
    const [showAchievments_1, setShowAchievments_1] = React.useState(false); // 1 Достижение
    const [showQuests, setShowQuests] = React.useState(false); // задания
    const [showFriends, setShowFriends] = React.useState(false); // Друзья
    

    var xp = 0.01;


    return (
        <div className="bg-gray-900 text-white min-h-screen p-6 ">
            {/* Основной экран */}
            {!showAttributes && !showAchievments && !showQuests && !showFriends &&(
                <>
                    <header className="text-center">
                        <h1 className="text-3xl font-bold ">Геймификация!</h1>
                        <p className="text-gray-400 mb-3">Улучшай себя каждый день</p>
                    </header>

                    {/* Категория "Уровень" */}
                    <section className="bg-gray-800 p-4 rounded-xl relative">
                        <div>
                            <h2 className="text-l ">Уровень</h2>
                            <p className="text-4xl font-bold">0</p>
                            <div className="w-full bg-gray-700 h-2 rounded mt-2">
                                <div className="bg-green-500 h-2 rounded" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                        <button
                            className="absolute top-4 right-4 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                            onClick={() => setShowAttributes(true)}
                        >
                            Атрибуты
                        </button>
                    </section>

                    <h2 className=" text-sm font-light w-min mt-6 text-gray-500">КАТЕГОРИИ</h2>

                    <div className="bg-gray-800 rounded-xl">
                    {/* Категория "Достижения" */}
                       
                            
                        
                    <section className="bg-gray-800 p-3 rounded-t-xl relative justify-center mt-2"
                        onClick={() => setShowAchievments(true)}>
                       
                            
                            <div className="flex gap-5 items-center px-1 ">
                            <img src="https://via.placeholder.com/150"
                                    alt=""
                                className="w-8"
                            />
                            <h2 className="text-xl f-min">Достижения</h2>
                            
                            </div>
                            
                            
                        
                        
                    </section>

                    <hr className="w-[85%] border-slate-700 bg-gray-500 ml-[15%]"/>
                    {/* Категория "Задания" */}
                    
                    <section className="bg-gray-800 p-3 rounded-b-xl relative space-y-10"
                            onClick={() => setShowQuests(true)}>
                    <div className="flex gap-5 items-center  px-1" >
                            <img src="https://via.placeholder.com/150"
                                alt=""
                                className="w-8"
                            />
                            <h2 className="text-xl f-min">Задания</h2>
                    </div>
                        
                    </section>
                    </div>
                </>
            )}

            {/* Экран "Атрибуты" */}
            {showAttributes && !showAttributeInfo && (
                <section className="flex flex-col justify-top items-center h-screen">
                    <h1 className="text-3xl font-bold mb-6">Атрибуты</h1>
                    <div className="space-y-4">
                        <Attribute name="Сила" value="5" />
                        <Attribute name="Ловкость" value="8" />
                        <Attribute name="Интеллект" value="6" />
                    </div>
                    <button
                        className="mt-8 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => setShowAttributeInfo(true)}
                    >
                        Узнать больше об атрибутах
                    </button>

                    <button
                        className="mt-80 bg-gray-700  px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => setShowAttributes(false)}
                    >
                        Hазад
                    </button>
                </section>
            )}



    {/* Экран "Друзья" */}
    {showFriends &&  (
                <section className="flex flex-col justify-top items-center min-h-screen ">
                    <img src="Duck-sleep.gif"
                            alt=""
                            className="w-40 h-auto justify-center"
                            />
                    <h1 className="text-2xl font-bold ">Друзья</h1>
                    <p className="text-gray-500 mt-2">Ваши Лучшие Друзья </p>

                    <div className="bg-gray-800 rounded-xl w-full mt-3 ">
                    {/* ДРУГ 1" */}
                       
                            
                        
                    <section className="bg-gray-800 p-3 rounded-t-xl relative justify-center "
                        onClick={() => setShowAchievments(true)}>
                       
                            
                            <div className="flex gap-5 items-center px-1 ">
                            <img src="https://via.placeholder.com/150"
                                    alt=""
                                className="w-8"
                            />
                            <h2 className="text-xl f-min">Илон Макс</h2>
                            
                            </div>
                            
                            
                        
                        
                    </section>

                    <hr className="w-[85%] border-slate-700 bg-gray-500 ml-[15%]"/>
                    {/* ДРУГ 2" */}
                    
                    <section className="bg-gray-800 p-3 rounded-b-xl relative space-y-10"
                            onClick={() => setShowQuests(true)}>
                    <div className="flex gap-5 items-center  px-1" >
                            <img src="https://via.placeholder.com/150"
                                alt=""
                                className="w-8"
                            />
                            <h2 className="text-xl f-min">Иван Трубчатый</h2>
                    </div>
                        
                    </section>
                    </div>
                </section>
            )}



            {/* Экран "Информация об атрибутах" */}
            {showAttributeInfo && (
                <section className="flex flex-col justify-center items-center h-screen px-6 text-center">
                    <h1 className="text-3xl font-bold mb-6">Информация об атрибутах</h1>
                    <p className="text-gray-400 mb-6">
                        - <strong>Сила:</strong> влияет на выполнение физических заданий.<br />
                        - <strong>Ловкость:</strong> помогает в быстроте выполнения.<br />
                        - <strong>Интеллект:</strong> влияет на сложность умственных задач.
                    </p>
                    <button
                        className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => setShowAttributeInfo(false)}
                    >
                        Назад к атрибутам
                    </button>
                </section>
            )}

            {/* Экран "Информация об достижениях" */}
            {showAchievments &&(
                <section className="flex flex-col justify-top items-center h-screen text-center">
                    <h1 className="text-3xl font-black mb-6"> Достижения </h1>
                            
                    <div className="bg-gray-900 text-white min-h-screen ">
                
                {/* Сетка из 3 колонок */}
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2">


                {/* Первая колонка */}
                <button className="bg-gray-800 rounded-lg  text-center"
                onClick={() => setShowAchievments_1(true)}
                    >
                <div>
                <img
                    src="Duck-sleep.gif"
                    alt="Фото"
                    className="w-100 h-100"
                    
                />
                </div>
                </button>


                {/* Вторая колонка */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                
                <img
                    src="https://via.placeholder.com/150"
                    alt="Фото"
                    className="w-24 h-24  rounded-full "
                />
                
                </div>

                {/* Третья колонка */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                
                <img
                    src="https://via.placeholder.com/150"
                    alt="Фото"
                    className="w- h-24 mx-auto rounded-full mb-4"
                />
                
                </div>
            </div>

            {/*Кнопка*/}
            <button
                        className="bg-gray-700 px-4 py-2 mt-5 justify-center rounded hover:bg-gray-600"
                        onClick={() => setShowAchievments(false)}
                >
                        Назад 
                </button>
        </div>

                    <section className="bg-gray-800 p-4 rounded-lg relative display-tr">
                        <div>
                            <h2 className="text-2xl font-bold">Марафонец</h2>
                            <p className="text-l font-lgiht">2/5</p>
                        </div>
                    </section>



                    
                </section>
            )}

            {/* Экран "Информация об атрибутах" */}
            {showAchievments_1 && (
                
                    
                <div className="relative">
                    <div className="fixed  left-0 h-[50%] w-full bg-gray-800 rounded-2xl text-white p-4 shadow-lg  transform -translate-y-full transition-all duration-500 ease-in">
                        <div className="flex justify-between items-center text-center">
                            <p className="text-xl font-black ">Мастер Сна!</p>
                            <button onClick={() => setShowAchievments_1(false)} className="text-xl">×</button>
                        </div   >

                        <img src="Duck-sleep.gif"
                            alt=""
                            className="w-[50%] h-[50%] justify-center"
                            />

                        <div className="justify-center bg-gray-600 w-full h-[10%] mt-[50%]"> 
                        </div>
                    </div>
                </div>    
                
            )}


            {/* Экран "Информация об заданиях" */}
            { showQuests &&  (
                <section className="flex flex-col justify-top items-center h-screen px-6 text-center">
                    <h1 className="text-3xl font-black mb-6"> Задания </h1>
                    
                    
                    <button
                        className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => setShowQuests(false)}
                    >
                        Назад 
                    </button>
                </section>
            )}

                <div className="fixed  bottom-0 left-0 w-full bg-gray-800 text-white shadow-md">
                    <div className="flex justify-around items-center py-3">
                        {/* Earn */}
                        <div className="flex flex-col items-center">
                        <div className="relative">
                            <img src="Achievments.png" alt="" className="w-8 h-8" />
                            
                        </div>  
                        <span className="text-sm mt-1">Trophy</span>
                        </div>

                        {/* Quests */}
                        <div className="flex flex-col  " onClick={() => setShowQuests(true)} >
                        <div className="relative mt-3">
                            <img src="Game.png" alt="" className="w-10 h-full" />
                            
                        </div>
                        <span className="text-sm mt-1">Quests</span>
                        </div>

                        {/* Main */}
                        <div className="flex flex-col items-center text-blue-400" 
                            onClick={() => {setShowAttributes(false);
                                            setShowQuests(false);
                                            setShowFriends(false);
                                            }
                                }
                        
                        >
                        <img src="main.png" alt="" className="w-10 h-full" />
                        <span className="text-sm mt-1">Main</span>
                        </div>

                        {/* Friends */}
                        <div className="flex flex-col items-center mt-2 " onClick={() => setShowFriends(true)}>
                        <img src="friends.png" alt="" className="w-10 h-full" />
                        <span className="text-sm mt-1">Friends</span>
                        </div>

                        {/* Profile */}
                        <div className="flex flex-col items-center">
                        <div className="relative">
                            <img src="profile.png" alt="" className="w-8 h-8" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2">
                            1
                            </span>
                        </div>
                        <span className="text-sm mt-1">Profile</span>
                        </div>
                    </div>
                    </div>
        </div>

        
    );
    
};

// Компонент "Атрибут"
const Attribute = ({ name, value }) => {
    return (
        <div className="text-center">
            <p className="text-gray-400">{name}</p>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
