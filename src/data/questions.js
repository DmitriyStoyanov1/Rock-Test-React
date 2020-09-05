export const questionsData = [
  {
    id: 1,
    question: 'Кто сыграл соло в этой песне Майкла Джексона?',
    // Замени пути, сначала не будет работать 100%, так как у нас нет сервера, то относительный путь не заработает
    song: './audio/1.mp3',
    // тоже что и выше справедливо для картинки
    background: './images/1.jpg',
    answers: {
      // вот так можно хранить варианты ответов
      a: 'Slash',
      b: 'Kirk Hammet',
      c: 'Eddy Van Halen',
      d: 'Steve Vai',
    },
    // это указатель на корретный ответ из объекта answers выше по коду
    correctAnswer: 'a'
  },
  {
    id: 2,
    question: 'Какой группе принадлежит эта песня?',
    song: './audio/2.mp3',
    background: './images/2.jpg',
    answers: {
      a: 'Deep Purple',
      b: 'Led Zeppelin',
      c: 'The Survivor',
      d: 'Uriah Heep',
    },
    correctAnswer: 'c'
  },
  {
    id: 3,
    question: 'В какой альбом Нирваны вошел этот хит?',
    song: './audio/3.mp3',
    background: './images/3.jpg',
    answers: {
      a: 'In Utero (1994)',
      b: 'Nevermind (1991)',
      c: 'Bleach (1989)',
      d: 'Hormoaning (1992)',
    },
    correctAnswer: 'b'
  },
  {
    id: 4,
    question: 'Как называется эта песня группы Metallica?',
    song: './audio/4.mp3',
    background: './images/4.jpg',
    answers: {
      a: 'Creeping death',
      b: 'Nothing else matters',
      c: 'Battery',
      d: 'Enter sandman',
    },
    correctAnswer: 'd'
  },
  {
    id: 5,
    question: 'Какой вокалист Black Sabbath участвовал в записи этой песни?',
    song: './audio/5.mp3',
    background: './images/5.jpg',
    answers: {
      a: 'Ozzy Osbourne',
      b: 'Ronnie James Dio',
      c: 'Ian Gillan',
      d: 'Toni Martin',
    },
    correctAnswer: 'b'
  },
  {
    id: 6,
    question: 'К какому стилю относится данная песня?',
    song: './audio/6.mp3',
    background: './images/6.jpg',
    answers: {
      a: 'Trash Metal',
      b: 'Industrial Metal',
      c: 'Punk Rock',
      d: 'Boogie Woogie',
    },
    correctAnswer: 'b'
  },
  {
    id: 7,
    question: 'Какая группа исполняет эту песню?',
    song: './audio/7.mp3',
    background: './images/7.jpg',
    answers: {
      a: 'The Offspring',
      b: 'Blink 182',
      c: 'Sum 41',
      d: 'Green Day',
    },
    correctAnswer: 'b'
  },
  {
    id: 8,
    question: 'Это саундтрек к фильму. Какому?',
    song: './audio/8.mp3',
    background: './images/8.jpg',
    answers: {
      a: 'Forsage',
      b: 'Spider-man',
      c: 'Matrix',
      d: 'Terminator 3',
    },
    correctAnswer: 'c'
  },
  {
    id: 9,
    question: 'Чего было много у героини этой песни?',
    song: './audio/9.mp3',
    background: './images/9.jpg',
    answers: {
      a: 'Чл*нов',
      b: 'Денег',
      c: 'Славы',
      d: 'Машин',
    },
    correctAnswer: 'a'
  },
  {
    id: 10,
    question: 'Кому принадлежит эта песня?',
    song: './audio/10.mp3',
    background: './images/10.jpg',
    answers: {
      a: 'Freddy Mercury',
      b: 'Michael Jackson',
      c: 'George Michael',
      d: 'Metallica',
    },
    correctAnswer: 'b'
  },
  {
    id: 11,
    question: 'Какой фильм ужасa ассоциируется с этой песней?',
    song: './audio/11.mp3',
    background: './images/11.jpg',
    answers: {
      a: 'Техасская резня бензопилой',
      b: 'Рассвет мертвецов',
      c: 'От заката до рассвета',
      d: 'Сияние',
    },
    correctAnswer: 'c'
  },
  {
    id: 12,
    question: 'Какая группа исполняет эту композицию?',
    song: './audio/12.mp3',
    background: './images/12.jpg',
    answers: {
      a: 'Tiamat',
      b: 'Type o Negative',
      c: 'Black Sabbath',
      d: 'Iron Maiden',
    },
    correctAnswer: 'b'
  },
  {
    id: 13,
    question: 'Как зовут вокалиста?',
    song: './audio/13.mp3',
    background: './images/13.jpg',
    answers: {
      a: 'Phil Anselmo',
      b: 'Bruce Dickinson',
      c: 'Joey Beladonna',
      d: 'Maynard Keenan',
    },
    correctAnswer: 'a'
  },
  {
    id: 14,
    question: 'Кто играет это крутое соло?',
    song: './audio/14.mp3',
    background: './images/14.jpg',
    answers: {
      a: 'Joe Satriani',
      b: 'John Petrucci',
      c: 'Dimebag Darrell',
      d: 'Zakk Wylde',
    },
    correctAnswer: 'c'
  },
  {
    id: 15,
    question: 'Барабанщик какой группы играет эту партию?',
    song: './audio/15.mp3',
    background: './images/15.jpg',
    answers: {
      a: 'Anthrax',
      b: 'Linkin Park',
      c: 'Pantera',
      d: 'Judas Priest',
    },
    correctAnswer: 'd'
  },
  {
    id: 16,
    question: 'Вы прослушали саундтрек к какой игре?',
    song: './audio/16.mp3',
    background: './images/16.jpg',
    answers: {
      a: 'Gran Tourismo',
      b: 'Need For Speed: Underground',
      c: 'Demolition Racer',
      d: 'GTA',
    },
    correctAnswer: 'b'
  },
  {
    id: 17,
    question: 'Чья это песня?',
    song: './audio/17.mp3',
    background: './images/17.jpg',
    answers: {
      a: 'Faith No More',
      b: 'Red Hot Chili Peppers',
      c: 'Rage Against The Machine',
      d: 'Muse',
    },
    correctAnswer: 'b'
  },
  {
    id: 18,
    question: 'Вы прослушали Korn - Blind. В какой альбом группы вошла эта песня?',
    song: './audio/18.mp3',
    background: './images/18.jpg',
    answers: {
      a: 'Follow the leader (1998)',
      b: 'The untouchables (2002)',
      c: 'Issues (1999)',
      d: 'Korn (1994)',
    },
    correctAnswer: 'd'
  },
  {
    id: 19,
    question: 'Как называется этот саундтрек к фильму "Армагеддон"?',
    song: './audio/19.mp3',
    background: './images/19.jpg',
    answers: {
      a: 'Cryin\'',
      b: 'I don\'t want to miss a thing',
      c: 'Crazy',
      d: 'Janie\'s got a gun',
    },
    correctAnswer: 'b'
  },
  {
  id: 20,
    question: 'Это отрывок песни Limp Bizkit - My Generation, записанной в стиле Nu Metal. На конец какого десятилетия пришелся пик данного стиля?',
    song: './audio/20.mp3',
    background: './images/20.jpg',
    answers: {
      a: 'Конец 90х',
      b: 'Конец 80х',
      c: 'Конец 2010х',
      d: 'Конец 2000х',
    },
    correctAnswer: 'a'
  },
  {
    id: 21,
    question: 'Вы прослушали отрывок Alice in Chains - Man in the box, песню в стиле Grunge. Какой период был расцветом данного стиля?',
    song: './audio/21.mp3',
    background: './images/21.jpg',
    answers: {
      a: '1985-1990',
      b: '1998-2001',
      c: '1990-1994',
      d: '1980-1984',
    },
    correctAnswer: 'c'
  },
  {
    id: 22,
    question: 'Группу, сыгравшую данную песню, называют королями Trash Metal\'a. Кто это?',
    song: './audio/22.mp3',
    background: './images/22.jpg',
    answers: {
      a: 'Metallica',
      b: 'Megadeth',
      c: 'Slayer',
      d: 'Anthrax',
    },
    correctAnswer: 'c'
  },
  {
    id: 23,
    question: 'Кто сыграл эту партию баса?',
    song: './audio/23.mp3',
    background: './images/23.jpg',
    answers: {
      a: 'Jason Newsted (Metallica)',
      b: 'Flea (Red Hot Chili Peppers)',
      c: 'Ian Hill (Judas Priest)',
      d: 'John Deacon (Queen)',
    },
    correctAnswer: 'd'
  },
  {
    id: 24,
    question: 'Какое прозвище закрепилось за вокалистом поющим песню?',
    song: './audio/24.mp3',
    background: './images/24.jpg',
    answers: {
      a: 'The Metal God',
      b: 'Steel Dragon',
      c: 'Demon',
      d: 'Evil',
    },
    correctAnswer: 'a'
  },
  {
  id: 25,
    question: 'Из какой страны эта Black Metal группа?',
    song: './audio/25.mp3',
    background: './images/25.jpg',
    answers: {
      a: 'Норвегия',
      b: 'Швеция',
      c: 'США',
      d: 'Польша',
    },
    correctAnswer: 'd'
  },
  {
  id: 26,
    question: 'Как зовут вокалиста?',
    song: './audio/26.mp3',
    background: './images/26.jpg',
    answers: {
      a: 'Chester Bennington',
      b: 'Dave Grohl',
      c: 'Chino Moreno',
      d: 'Jonathan Davis',
    },
    correctAnswer: 'a'
  },
  {
  id: 27,
    question: 'Какая группа изначально исполнила эту песню?',
    song: './audio/27.mp3',
    background: './images/27.jpg',
    answers: {
      a: 'Depeche Mode',
      b: 'Modern Talking',
      c: 'Eurythmics',
      d: 'Ministry',
    },
    correctAnswer: 'c'
  },
  {
  id: 28,
    question: 'Эта группа считается первой кто смешал Rap и Metal, кто они?',
    song: './audio/28.mp3',
    background: './images/28.jpg',
    answers: {
      a: 'Rage Against The Machine',
      b: 'Anthrax',
      c: 'Limp Bizkit',
      d: 'House of Pain',
    },
    correctAnswer: 'b'
  },
  {
  id: 29,
    question: 'Как зовут барабанщика играющего в этой песне?',
    song: './audio/29.mp3',
    background: './images/29.jpg',
    answers: {
      a: 'Dave Lombardo',
      b: 'Tommy Lee',
      c: 'Charlie Benante',
      d: 'Rick Allen',
    },
    correctAnswer: 'b'
  },
  {
  id: 30,
    question: 'Какой скандальный персонаж исполняет данную композицию?',
    song: './audio/30.mp3',
    background: './images/30.jpg',
    answers: {
      a: 'Ozzy Osbourne',
      b: 'G.G. Allin',
      c: 'Marylin Manson',
      d: 'Fred Durst',
    },
    correctAnswer: 'c'
  },
  {
  id: 31,
    question: 'Эта группа является первопроходцем в своем жанре. Кто они?',
    song: './audio/31.mp3',
    background: './images/31.jpg',
    answers: {
      a: 'Ramones (Punk Rock)',
      b: 'Metallica (Trash Metal)',
      c: 'Black Sabbath (Doom Metal)',
      d: 'Korn (Nu Metal)',
    },
    correctAnswer: 'a'
  },
  {
  id: 32,
    question: 'Этот коллектив называется так же как альбом группы 70х годов. Как именно?',
    song: './audio/32.mp3',
    background: './images/32.jpg',
    answers: {
      a: 'Steel Heart',
      b: 'Broken Hand',
      c: 'Machine Head',
      d: 'Sweating Bullet',
    },
    correctAnswer: 'c'
  },
  {
  id: 33,
    question: 'Как зовут вокалиста исполняющего песню?',
    song: './audio/33.mp3',
    background: './images/33.jpg',
    answers: {
      a: 'Freddy Mercury',
      b: 'John Lennon',
      c: 'Paul McCartney',
      d: 'Prince',
    },
    correctAnswer: 'a'
  },
  {
  id: 34,
    question: 'Какому событию приурочена эта песня?',
    song: './audio/34.mp3',
    background: './images/34.jpg',
    answers: {
      a: '«Бархатной революции» в Чехии',
      b: 'Завершению войны в Афганистане',
      c: 'Выводу советских войск из Венгрии',
      d: 'Падению Берлинской стены',
    },
    correctAnswer: 'd'
  },
  {
  id: 35,
    question: 'Кто играет и поет в этой песне?',
    song: './audio/35.mp3',
    background: './images/35.jpg',
    answers: {
      a: 'Gary Moore',
      b: 'Ian Gillan',
      c: 'Lionel Richie',
      d: 'Frank Sinatra',
    },
    correctAnswer: 'a'
  },
  {
  id: 36,
    question: 'Крестный отец стиля Shock Rock, кто он?',
    song: './audio/36.mp3',
    background: './images/36.jpg',
    answers: {
      a: 'Marylin Manson',
      b: 'Ozzy Osbourne',
      c: 'Alice Cooper',
      d: 'Rob Zombie',
    },
    correctAnswer: 'c'
  },
  {
  id: 37,
    question: 'Что является основным сценическим элементом участников этой группы?',
    song: './audio/37.mp3',
    background: './images/37.jpg',
    answers: {
      a: 'Черепа',
      b: 'Разноцветные костюмы',
      c: 'Маски',
      d: 'Воздушные шары',
    },
    correctAnswer: 'c'
  },
  {
  id: 38,
    question: 'Как зовут лидера и гитариста этой легендарной группы?',
    song: './audio/38.mp3',
    background: './images/38.jpg',
    answers: {
      a: 'Angus Young',
      b: 'Paul Guilbert',
      c: 'Richard Kruspe',
      d: 'Brian May',
    },
    correctAnswer: 'a'
  },
  {
  id: 39,
    question: 'О чем эта песня?',
    song: './audio/39.mp3',
    background: './images/39.jpg',
    answers: {
      a: 'О сражении на поле боя',
      b: 'О гонках на трассе',
      c: 'О полете человека на луну',
      d: 'О выживании в джунглях',
    },
    correctAnswer: 'a'
  },
  {
  id: 40,
    question: 'Это композиция Power Metal группы Dragonforce. Какова основная тематика песен в данном стиле?',
    song: './audio/40.mp3',
    background: './images/40.jpg',
    answers: {
      a: 'Убийство и жестокость',
      b: 'Пессимизм, отрешенность, уныние',
      c: 'Тяжелые реалии современной жизни',
      d: 'Мифы, сражения, подвиги',
    },
    correctAnswer: 'd'
  },
  {
  id: 41,
    question: 'Как чаще всего использовали эту мелодию в начале 2000х?',
    song: './audio/41.mp3',
    background: './images/41.jpg',
    answers: {
      a: 'Мелодия для будильника',
      b: 'Рингтон на телефон',
      c: 'Пожарная сигнализация',
      d: 'Заставка телепередач',
    },
    correctAnswer: 'b'
  },
  {
  id: 42,
    question: 'Кто из участников ливерпульской четверки написал эту песню?',
    song: './audio/42.mp3',
    background: './images/42.jpg',
    answers: {
      a: 'John Lennon',
      b: 'George Harrison',
      c: 'Ringo Starr',
      d: 'Paul McCartney',
    },
    correctAnswer: 'd'
  },
  {
  id: 43,
    question: 'Эта группа считалась бунтарской альтернативой Beatles. Кто они?',
    song: './audio/43.mp3',
    background: './images/43.jpg',
    answers: {
      a: 'Rolling Stones',
      b: 'The Kinks',
      c: 'The Who',
      d: 'The Beach Boys',
    },
    correctAnswer: 'a'
  },
  {
  id: 44,
    question: 'Как называется группа сыгравшая эту песню?',
    song: './audio/44.mp3',
    background: './images/44.jpg',
    answers: {
      a: 'Asia',
      b: 'Europe',
      c: 'Motley Crue',
      d: 'Genesis',
    },
    correctAnswer: 'b'
  },
  {
  id: 45,
    question: 'Как называется группа сыгравшая эту песню?',
    song: './audio/45.mp3',
    background: './images/45.jpg',
    answers: {
      a: 'Limp Bizkit',
      b: 'Maroon 5',
      c: 'Green Day',
      d: 'Linkin Park',
    },
    correctAnswer: 'd'
  },
  {
  id: 46,
    question: 'Кем были участники группы Bloodhound Gang в клипе к этой песне?',
    song: './audio/46.mp3',
    background: './images/46.jpg',
    answers: {
      a: 'Собаками',
      b: 'Крокодилами',
      c: 'Обезьянами',
      d: 'Драконами',
    },
    correctAnswer: 'c'
  },
  {
  id: 47,
    question: 'Именно эта группа вывела Industrial Rock в мейнстрим. Кто они?',
    song: './audio/47.mp3',
    background: './images/47.jpg',
    answers: {
      a: 'Nine Inch Nails',
      b: 'Ministry',
      c: 'Depeche Mode',
      d: 'Duran Duran',
    },
    correctAnswer: 'a'
  },
  {
  id: 48,
    question: 'Кто исполняет эту песню?',
    song: './audio/48.mp3',
    background: './images/48.jpg',
    answers: {
      a: 'Tears for Fears',
      b: 'Duran Duran',
      c: 'Depeche Mode',
      d: 'The Smiths',
    },
    correctAnswer: 'b'
  },
  {
  id: 49,
    question: 'Кто является главным героем этой композиции?',
    song: './audio/49.mp3',
    background: './images/49.jpg',
    answers: {
      a: 'Девушка-группи',
      b: 'Продавщица супермаркета',
      c: 'Стюардесса',
      d: 'Бездомная из гетто',
    },
    correctAnswer: 'a'
  },
  {
  id: 50,
    question: 'Вы прослушали отрывок композиции американской группы System of a down. Кто по национальности участники группы?',
    song: './audio/50.mp3',
    background: './images/50.jpg',
    answers: {
      a: 'Армяне',
      b: 'Венгры',
      c: 'Беларусы',
      d: 'Украинцы',
    },
    correctAnswer: 'a'
  },
  {
  id: 51,
    question: 'Кто исполняет эту песню?',
    song: './audio/51.mp3',
    background: './images/51.jpg',
    answers: {
      a: 'Beastie Boys',
      b: 'Arctic Monkeys',
      c: 'Red Hot Chili Peppers',
      d: 'Rolling Stones',
    },
    correctAnswer: 'c'
  },
  {
  id: 52,
    question: 'Лидером какой группы являлся басист-вокалист Лемми Килмистер?',
    song: './audio/52.mp3',
    background: './images/52.jpg',
    answers: {
      a: 'Motorhead',
      b: 'Diamond head',
      c: 'Def Leppard',
      d: 'Quiet Riot',
    },
    correctAnswer: 'a'
  },
  {
  id: 53,
    question: 'Какой электронной группе принадлежит эта Rock композиция?',
    song: './audio/53.mp3',
    background: './images/53.jpg',
    answers: {
      a: 'Chemical Brothers',
      b: 'Prodigy',
      c: 'Daft Punk',
      d: 'Empirion',
    },
    correctAnswer: 'b'
  },
  {
  id: 54,
    question: 'Что за реппера исполняют эту песню?',
    song: './audio/54.mp3',
    background: './images/54.jpg',
    answers: {
      a: 'Run DMC',
      b: 'N.W.A.',
      c: 'Beastie Boys',
      d: 'Cypress Hill',
    },
    correctAnswer: 'd'
  },
  {
  id: 55,
    question: 'Кому принадлежит авторство этой композиции?',
    song: './audio/55.mp3',
    background: './images/55.jpg',
    answers: {
      a: 'Kiss',
      b: 'Scooter',
      c: 'Abba',
      d: 'Pearl Jam',
    },
    correctAnswer: 'a'
  },
  {
  id: 56,
    question: 'Гитарист какой группы исполняет это соло?',
    song: './audio/56.mp3',
    background: './images/56.jpg',
    answers: {
      a: 'Guns\'n\'Roses',
      b: 'Bon Jovi',
      c: 'Blur',
      d: 'Oasis',
    },
    correctAnswer: 'a'
  },
  {
  id: 57,
    question: 'Кто поет эту песню?',
    song: './audio/57.mp3',
    background: './images/57.jpg',
    answers: {
      a: 'Vince Neil',
      b: 'Dee Snider',
      c: 'Axl Rose',
      d: 'John Bon Jovi',
    },
    correctAnswer: 'd'
  },
  {
  id: 58,
    question: 'Из какой страны группа сыгравшая эту песню?',
    song: './audio/58.mp3',
    background: './images/58.jpg',
    answers: {
      a: 'США',
      b: 'Франция',
      c: 'Бразилия',
      d: 'Испания',
    },
    correctAnswer: 'c'
  },
  {
  id: 59,
    question: 'Как называется эта группа с женским вокалом?',
    song: './audio/59.mp3',
    background: './images/59.jpg',
    answers: {
      a: 'The Granberries',
      b: 'Arch Enemy',
      c: 'Garbage',
      d: 'The Cardigans',
    },
    correctAnswer: 'a'
  },
  {
  id: 60,
    question: 'Саундтреком к какому фильму стала эта песня группы Roxette?',
    song: './audio/60.mp3',
    background: './images/60.jpg',
    answers: {
      a: 'Титаник',
      b: 'Красотка',
      c: 'Жестокие Игры',
      d: 'Эффект Бабочки',
    },
    correctAnswer: 'b'
  },
  {
  id: 61,
    question: 'Чья это песня?',
    song: './audio/61.mp3',
    background: './images/61.jpg',
    answers: {
      a: 'Sum 41',
      b: 'My Chemical Romance',
      c: 'The Offspring',
      d: 'The Misfits',
    },
    correctAnswer: 'c'
  },
  {
  id: 62,
    question: 'К какому стилю относится эта песня?',
    song: './audio/62.mp3',
    background: './images/62.jpg',
    answers: {
      a: 'Death Metal',
      b: 'Metalcore',
      c: 'Punk Rock',
      d: 'Black Metal',
    },
    correctAnswer: 'b'
  },
  {
  id: 63,
    question: 'Какой группе принадлежит эта песня?',
    song: './audio/63.mp3',
    background: './images/63.jpg',
    answers: {
      a: 'Bon Jovi',
      b: 'INXS',
      c: 'Nickelback',
      d: 'Scorpions',
    },
    correctAnswer: 'a'
  },
  {
  id: 64,
    question: 'Что подтолкнуло группу Deep Purple записать этот легендарный хит?',
    song: './audio/64.mp3',
    background: './images/64.jpg',
    answers: {
      a: 'Наводнение',
      b: 'Цунами',
      c: 'Торнадо',
      d: 'Пожар',
    },
    correctAnswer: 'd'
  },
  {
  id: 65,
    question: 'Кто сыграл это легендарное соло?',
    song: './audio/65.mp3',
    background: './images/65.jpg',
    answers: {
      a: 'Jimmy Page',
      b: 'Eddy Van Halen',
      c: 'Yngwie Malmsteen',
      d: 'Jeff Waters',
    },
    correctAnswer: 'b'
  },
  {
  id: 66,
    question: 'Что за группа исполняет эту песню?',
    song: './audio/66.mp3',
    background: './images/66.jpg',
    answers: {
      a: 'Genesis',
      b: 'Eagles',
      c: 'Aerosmith',
      d: 'Smokie',
    },
    correctAnswer: 'd'
  },
  {
  id: 67,
    question: 'Какая группа играет эту песню?',
    song: './audio/67.mp3',
    background: './images/67.jpg',
    answers: {
      a: 'Dio',
      b: 'Status Quo',
      c: 'Rainbow',
      d: 'Steeley Dan',
    },
    correctAnswer: 'b'
  },
  {
  id: 68,
    question: 'Саундтрек к какому фильму вы прослушали?',
    song: './audio/68.mp3',
    background: './images/68.jpg',
    answers: {
      a: 'Джеймс Бонд',
      b: 'Крестный Отец',
      c: 'Гладиатор',
      d: 'Пятый Элемент',
    },
    correctAnswer: 'a'
  },
  {
  id: 69,
    question: 'Что стало причиной смерти гитариста сыгравшего это соло?',
    song: './audio/69.mp3',
    background: './images/69.jpg',
    answers: {
      a: 'Авиакрушение',
      b: 'Автокатастрофа',
      c: 'Неизлечимая болезнь',
      d: 'Передозировка наркотиками',
    },
    correctAnswer: 'a'
  },
  {
  id: 70,
    question: 'Как называется британская группа сыгравшая эту песню?',
    song: './audio/70.mp3',
    background: './images/70.jpg',
    answers: {
      a: 'Depeche Mode',
      b: 'Blur',
      c: 'The Verve',
      d: 'Radiohead',
    },
    correctAnswer: 'a'
  },
  {
  id: 71,
    question: 'Из какой страны группа сыгравшая данную песню?',
    song: './audio/71.mp3',
    background: './images/71.jpg',
    answers: {
      a: 'Германия',
      b: 'США',
      c: 'Англия',
      d: 'Австралия',
    },
    correctAnswer: 'c'
  },
  {
  id: 72,
    question: 'Это песня Стинга. Какую группу он основал в конце 70х?',
    song: './audio/72.mp3',
    background: './images/72.jpg',
    answers: {
      a: 'The Doors',
      b: 'Rush',
      c: 'The Police',
      d: 'The Smashing Pumpkins',
    },
    correctAnswer: 'c'
  },
  {
  id: 73,
    question: 'Кто исполнил эту песню?',
    song: './audio/73.mp3',
    background: './images/73.jpg',
    answers: {
      a: 'David Bowie',
      b: 'Roger Waters',
      c: 'Richard Wright',
      d: 'Steven Tyler',
    },
    correctAnswer: 'a'
  },
  {
  id: 74,
    question: 'Как правильно назывется этот хит группы PinK Floyd?',
    song: './audio/74.mp3',
    background: './images/74.jpg',
    answers: {
      a: 'The Wall',
      b: 'Another Brick In The Wall',
      c: 'Another Piece In The Wall',
      d: 'Brick In The Wall',
    },
    correctAnswer: 'b'
  },
  
];

