const App = () => {
    const [currentScreen, setCurrentScreen] = React.useState('main');

    // Данные о привычках
    const habits = [
        { id: 1, title: "Алкоголь", description: "Избегайте употребления алкоголя, чтобы сохранить здоровье." },
        { id: 2, title: "Курение", description: "Курение вредит вашему телу и окружающим." },
        { id: 3, title: "Сладкое", description: "Ограничьте сахар, чтобы улучшить физическое состояние." },
        { id: 4, title: "Прокрастинация", description: "Перестаньте откладывать важные дела." },
        { id: 5, title: "Соцсети", description: "Сократите время в социальных сетях для продуктивности." },
    ];

    const tips = [
        "Пейте больше воды.",
        "Замените плохую привычку новой, полезной.",
        "Используйте технику помодоро для концентрации.",
        "Избегайте мест и ситуаций, связанных с привычкой.",
        "Запишите свои успехи и достижения."
    ];

    return (
        <div className="p-4 space-y-4 max-w-md mx-auto">
            {currentScreen === 'main' && (
                <div>
                    {/* Основной экран */}
                    <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                        <div>
                            <div className="text-gray-400 text-sm sm:text-base">Дней без вредной привычки:</div>
                            <div className="text-2xl sm:text-4xl font-bold">7</div>
                        </div>
                        <button
                            className="bg-green-500 text-black px-3 py-2 text-sm sm:text-base rounded-lg"
                            onClick={() => setCurrentScreen('habits')}
                        >
                            Вредные привычки →
                        </button>
                    </div>
                </div>
            )}

            {currentScreen === 'habits' && (
                <div>
                    {/* Экран привычек */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h1 className="text-2xl sm:text-3xl font-bold">Вредные привычки</h1>
                        <p className="text-gray-400 text-sm sm:text-base mt-2">
                            Узнайте больше о различных вредных привычках и как с ними справиться.
                        </p>
                    </div>

                    {/* Список привычек */}
                    <div className="space-y-2 mt-4">
                        {habits.map((habit) => (
                            <div key={habit.id} className="bg-gray-700 p-4 rounded-lg">
                                <h2 className="text-lg sm:text-xl font-bold">{habit.title}</h2>
                                <p className="text-gray-400 text-sm sm:text-base mt-1">{habit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Раздел советов */}
                    <div className="bg-gray-800 p-4 rounded-lg mt-4">
                        <h2 className="text-lg sm:text-xl font-bold">Полезные советы</h2>
                        <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base mt-2 space-y-1">
                            {tips.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Кнопка назад */}
                    <button
                        className="mt-4 bg-gray-600 text-blue-400 px-3 py-2 text-sm sm:text-base rounded-lg w-full"
                        onClick={() => setCurrentScreen('main')}
                    >
                        ← Назад
                    </button>
                </div>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
