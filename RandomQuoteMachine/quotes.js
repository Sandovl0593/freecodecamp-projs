const quotes = [
  {
    text: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
    author: "Lao Tzu",
  },
  {
    text: "Do today what others won't and achieve tomorrow what others can't.",
    author: "Jerry Rice",
  },
  {
    text: "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
    author: "Henry Wadsworth Longfellow",
  },
  {
    text: "If we don't discipline ourselves, the world will do it for us.",
    author: "William Feather",
  },
  {
    text: "Rule your mind or it will rule you.",
    author: "Horace",
  },
  {
    text: "All that we are is the result of what we have thought.",
    author: "Buddha",
  },
  {
    text: "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
    author: "Pulsifer, Take Action; Don't Procrastinate",
  },
  {
    text: "Never leave that till tomorrow which you can do today.",
    author: "Benjamin Franklin",
  },
  {
    text: "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
    author: "Christopher Parker",
  },
  {
    text: "Someday is not a day of the week.",
    author: "Author Unknown",
  },
  {
    text: "Tomorrow is often the busiest day of the week.",
    author: "Spanish Proverb",
  },
  {
    text: "I can accept failure, everyone fails at something. But I can't accept not trying.",
    author: "Michael Jordan",
  },
  {
    text: "There’s a myth that time is money. In fact, time is more precious than money. It’s a nonrenewable reauthor. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.",
    author: "Neil A. Fiore",
  },
  {
    text: "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
    author: "Thomas Jefferson",
  },
  {
    text: "There is only one success--to be able to spend your life in your own way.",
    author: "Christopher Morley",
  },
  {
    text: "Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration.",
    author: "Evan Esar",
  },
  {
    text: "We are still masters of our fate. We are still captains of our souls.",
    author: "Winston Churchill",
  },
  {
    text: "Our truest life is when we are in dreams awake.",
    author: "Henry David Thoreau",
  },
  {
    text: "The best way to make your dreams come true is to wake up.",
    author: "Paul Valery",
  },
  {
    text: "Life without endeavor is like entering a jewel mine and coming out with empty hands.",
    author: "Japanese Proverb",
  },
  {
    text: "Happiness does not consist in pastimes and amusements but in virtuous activities.",
    author: "Aristotle",
  },
  {
    text: "By constant self-discipline and self-control, you can develop greatness of character.",
    author: "Grenville Kleiser",
  },
  {
    text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    author: "Vince Lombardi Jr.",
  },
  {
    text: "At the end of the day, let there be no excuses, no explanations, no regrets.",
    author: "Steve Maraboli",
  },
  {
    text: "Inaction will cause a man to sink into the slough of despond and vanish without a trace.",
    author: "Farley Mowat",
  },
  {
    text: "True freedom is impossible without a mind made free by discipline.",
    author: "Mortimer J. Adler",
  },
  {
    text: "The most powerful control we can ever attain, is to be in control of ourselves.",
    author: "Chris Page",
  },
  {
    text: "Idleness is only the refuge of weak minds, and the holiday of fools.",
    author: "Philip Dormer Stanhope",
  },
  {
    text: "This is your life and it's ending one minute at a time.",
    author: "Tyler Durden, Fight Club",
  },
  {
    text: "You create opportunities by performing, not complaining.",
    author: "Muriel Siebert",
  },
  {
    text: "Great achievement is usually born of great sacrifice, and is never the result of selfishness.",
    author: "Napoleon Hill",
  },
  {
    text: "Whether you think you can, or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    text: "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.",
    author: "Martin Luther",
  },
  {
    text: "Great acts are made up of small deeds.",
    author: "Lao Tzu",
  },
  {
    text: "The flame that burns Twice as bright burns half as long.",
    author: "Lao Tzu",
  },
  {
    text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupery",
  },
  {
    text: "If you can't do great things, do small things in a great way.",
    author: "Napoleon Hill",
  },
  {
    text: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    text: "Whatever you think the world is withholding from you, you are withholding from the world.",
    author: "Ekhart Tolle",
  },
  {
    text: "Muddy water is best cleared by leaving it alone.",
    author: "Alan Watts",
  },
  {
    text: "Do, or do not. There is no try.",
    author: "Yoda",
  },
  {
    text: "The superior man is modest in his speech, but exceeds in his actions.",
    author: "Confucius",
  },
  {
    text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    author: "Helen Keller",
  },
  {
    text: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie",
  },
  {
    text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    text: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
    author: "Maya Angelou",
  },
  {
    text: "We need to start work with the idea that we’re going to learn every day. I learn, even at my position, every single day.",
    author: "Chanda Kochhar",
  },
  {
    text: "There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.",
    author: "Indira Gandhi",
  },
  {
    text: "You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.",
    author: "Tina Fey",
  },
  {
    text: "Above all, be the heroine of your life, not the victim.",
    author: "Nora Ephron",
  },
  {
    text: "Learn from the mistakes of others. You can’t live long enough to make them all yourself.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    author: "Jane Goodall",
  },
  {
    text: "One of the secrets to staying young is to always do things you don’t know how to do, to keep learning.",
    author: "Ruth Reichl",
  },
  {
    text: "If you don’t risk anything, you risk even more.",
    author: "Erica Jong",
  },
  {
    text: "When the whole world is silent, even one voice becomes powerful.",
    author: "Malala Yousafzai",
  },
  {
    text: "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
  },
  {
    text: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
    author: "Oprah Winfrey",
  },
  {
    text: "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
    author: "Sara Blakely",
  },
  {
    text: "If I had to live my life again, I’d make the same mistakes, only sooner.",
    author: "Tallulah Bankhead",
  },
  {
    text: "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
    author: "Mae C. Jemison",
  },
  {
    text: "If you obey all the rules, you miss all the fun.",
    author: "Katharine Hepburn",
  },
  {
    text: "Life shrinks or expands in proportion to one’s courage.",
    author: "Anaïs Nin",
  },
  {
    text: "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.",
    author: "Helen Keller",
  },
  {
    text: "How wonderful it is that nobody need wait a single moment before beginning to improve the world.",
    author: "Anne Frank",
  },
  {
    text: "So often people are working hard at the wrong thing. Working on the right thing is probably more important than working hard.",
    author: "Caterina Fake",
  },
  {
    text: "There are still many causes worth sacrificing for, so much history yet to be made.",
    author: "Michelle Obama",
  },
  {
    text: "Nothing is impossible; the word itself says ‘I’m possible’!",
    author: "Audrey Hepburn",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

export default quotes;
