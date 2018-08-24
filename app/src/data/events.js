// scraped from https://react-native.eu/
/*
  copy(
    JSON.stringify(
      $$("li.agenda__item").map(item => {
        const time = item.querySelector("time");
        const speaker = item.querySelector("h4.agenda__header");
        const company = item.querySelector(".agenda__company");
        const title = item.querySelector("p.agenda__header");
        const agenda = item.querySelector("p.agenda__text");
        const date = time ? time.getAttribute("datetime") : null;

        return {
          day: date ? new Date(Date.parse(date)).getDate() : null,
          time: date
            ? new Date(Date.parse(date)).toLocaleTimeString().slice(0, 5)
            : null,
          date: time ? time.getAttribute("datetime") : null,
          speaker: speaker ? speaker.innerText : "",
          company: company ? company.innerText : "",
          title: title ? title.innerText : "",
          agenda: agenda ? agenda.innerHTML : ""
        };
      }),
      null,
      2
    )
  );
*/

const data = [
  {
    day: 3,
    time: '21:30',
    date: '2018-09-03 21:30',
    speaker: '',
    company: '',
    title: 'Finish this workshop',
    agenda: 'Yeah, so real talk... This was a tight squeeze. But we hope you are enjoying this workshop anyway right now.',
    duration: 2
  },
  {
    day: 4,
    time: '08:30',
    date: '2018-09-04 08:30',
    speaker: '',
    company: '',
    title: 'RN Interactions Workshop',
    agenda: 'Seriously? Why are you reading this? You\'re probably here right now. Get back to work please. We have interactions to implement.',
    duration: 4
  },
  {
    day: 5,
    time: '08:30',
    date: '2018-09-05 08:30',
    speaker: 'Registration',
    company: '',
    title: '',
    agenda: ''
  },
  {
    day: 5,
    time: '09:20',
    date: '2018-09-05 09:20',
    company: 'CALLSTACK',
    title: 'Introduction',
    agenda: '',
    duration: 0.16
  },
  {
    day: 5,
    time: '09:30',
    date: '2018-09-05 09:30',
    speaker: 'Mike Grabowski',
    company: 'CALLSTACK',
    title: 'Keynote',
    agenda: ''
  },
  {
    day: 5,
    time: '10:00',
    date: '2018-09-05 10:00',
    speaker: 'Eric Vicenti',
    company: '',
    title: 'Owning Transitions',
    agenda:
      'The "Transitioner" is the view in React Navigation responsible for animating between screens and supporting navigation gestures. We will discuss how views like "stack" work today, how they evolved, and how they fit into React Navigation and other navigation libraries. Historically, it has been quite difficult to create custom screen transitions and gestures. So the time has come to introduce a new Transitioner, and give you complete control over screen transitions in your React Native App.'
  },
  {
    day: 5,
    time: '10:30',
    date: '2018-09-05 10:30',
    speaker: 'Coffee break',
    company: '',
    title: '',
    agenda: ''
  },
  {
    day: 5,
    time: '11:00',
    date: '2018-09-05 11:00',
    speaker: 'Roy Derks',
    company: 'HACKTEAM',
    title: 'GraphQL Will Do To REST What JSON Did To XML',
    agenda:
      'Why GraphQL will become the new standard for accessing external data in your React Native app. I will show how using GraphQL instead of REST services the development process becomes even more declarative as GraphQL will take away the (imperative) hassle of tying data from multiple endpoints together. This will increase the level of complexity in React Native development, while also increasing the performance of the application.'
  },
  {
    day: 5,
    time: '11:30',
    date: '2018-09-05 11:30',
    speaker: 'Sara Vieira',
    company: 'YLD',
    title: 'GQL all the Things!',
    agenda:
      '\n                Let\'s take a look at look at what we can do with React Apollo today, how we can use it to even manage our local state and see what the future holds for us in the new releases of React Apollo.\n              '
  },
  {
    day: 5,
    time: '12:00',
    date: '2018-09-05 12:00',
    speaker: 'Krzysztof Magiera',
    company: 'SOFTWARE MANSION',
    title: 'It all starts with navigation',
    agenda:
      '\n                For the past 2.5 years I\'ve been working on a bunch of projects, all aiming to expose some native capabilities to be controlled from JavaScript in React Native app. Most notable ones were: native driver support for Animated and two libraries: React Native Gesture Handler and Reanimated. All these projects were inspired by needs of navigation libraries and were meant to fill the gap between platform native navigation solutions and ones that are available in React Native.<br>\n                Our React Native projects often starts by deciding whether to go with native navigation (react-native-navigation) or JS navigation library (react-navigation). But given all these improvements can we still call react-navigation "not native"? In this talk we will learn how Gesture Handler and Reanimated libraries came to live with navigation being the driving force. In this context I will discuss how far is react-navigation from finally proclaiming the badge of really native navigation library.\n              '
  },
  {
    day: 5,
    time: '12:30',
    date: '2018-09-05 12:30',
    speaker: 'Lunch',
    company: '',
    title: '',
    agenda: ''
  },
  {
    day: 5,
    time: '13:30',
    date: '2018-09-05 13:30',
    speaker: 'Quinlan Jung',
    company: 'EXPO',
    title: 'Self hosting mobile applications',
    agenda:
      'When building a website, you expose an endpoint where you control the contents that are served back to a user. What if you could do this with a mobile app? Quin will be talking about how you can host your own javascript bundles, writing your own policies so you control exactly what version of the app different users get, and pushing them over the air to users for real time updates.'
  },
  {
    day: 5,
    time: '14:00',
    date: '2018-09-05 14:00',
    speaker: 'Pavlo Babenko',
    company: 'AXSY',
    title:
      'Wrangling Your Workflow - Taking Charge of React Native Deployments',
    agenda:
      'How to hang a painting on the wall with React Native\n                  So you want to buy a painting, but not sure which one. Or where to place it? we have a solution. Just use your phone for this.\n                  Augmented reality becomes more popular in recent years. Companies like Apple or Google invests tons of money to develop AR support. Smartphones became powerful enough to deal with all these new features. And it\'ll be ridiculous not to use all this power when looking for the best place to put a piece of art.\n                  In this talk we\'ll be looking at ARKit from Apple and the ways how we can use it with React Native. We\'ll be building a simple app to hang paintings on the wall and learning how to deal with newest AR technologies.'
  },
  {
    day: 5,
    time: '14:30',
    date: '2018-09-05 14:30',
    speaker: 'Radek Pietruszewski',
    company: 'NOZBE',
    title: 'Next-generation React databases',
    agenda:
      '\n                How do you manage user data in your React Native app? A popular approach is to use Redux or MobX with a persistence adapter. This works great for small, simple apps, but it has a serious flaw: it doesn\'t scale very well.\n                Introducing WatermelonDB — a next generation database for React and React Native. Here\'s why you should care: <br>\n                - Highly scalable. Works as well for 20,000 database records as it does for 100.\n                Instant launch. No matter how much data you have, the app still launches with near-zero performance penalty <br>\n                - Lazy loaded everything. Don\'t load all data at launch, query only the exact records you need. That\'s why it\'s fast! <br>\n                - Fully reactive. All records and queries are observable using RxJS. A change in one place propagates to all other places automatically <br>\n                - Made for React. Comes with a HOC so you can declaratively tie together data and components <br>\n                - Relational. Document stores are simple, but relational databases are powerful. Want to find, say, all posts that have a comment by user X? Sure, that\'ll be about a millisecond. <br>\n                - Cross-platform. Works on iOS and Android (using SQLite), on the web (using LokiJS), and it\'s easy to add more <br>\n                - Performant. Uses asynchronous processing, multi-threading (also on the web), resource sharing, and caching to squeeze extra performance <br>\n                - Built for sync. Comes with syncing primitives so you can supply your own synchronization code <br>\n              '
  },
  {
    day: 5,
    time: '15:00',
    date: '2018-09-05 15:00',
    company: 'CALLSTACK',
    title: 'Lightning Talks',
    agenda:
      'Five high quality lightning talks by different speakers: "Paper: Welcome to Material Design 2.0", "Understanding "Native" in React Native", "Going Native: Reusing Code", "Building Bluetooth powered React Native Apps", and "Developing iOS apps on Linux"'
  },
  {
    day: 5,
    time: '16:00',
    date: '2018-09-05 16:00',
    speaker: 'Coffee break',
    company: '',
    title: '',
    agenda: ''
  },
  {
    day: 5,
    time: '16:30',
    date: '2018-09-05 16:30',
    speaker: 'Matt Hargett',
    company: 'PLAYSTATION',
    title: '',
    agenda: 'Bringing React Native to the next billion devices'
  },
  {
    day: 5,
    time: '17:00',
    date: '2018-09-05 17:00',
    speaker: 'Stanisław Chmiela',
    company: 'SOFTWARE MANSION',
    title: 'Chopping Expo up into universal modules to take over the world',
    agenda:
      'Expo SDK (part of Expo toolchain) is an open-source library built around React Native, allowing developers to access native components and APIs without too much fuss. Until recently it has been a big monolith, it was hard for developers to either remove unused APIs from their bundle or to use some Expo code in vanilla React Native applications. We’ve decided it is time for Expo to be redesigned and split into multiple, separate native + JS (+ more 🤭) libraries which developers will be able to opt-out of using in Expo standalone apps and also to use in their plain RN projects. This talk will describe the process of making this transition, design of the solution we’ve settled on and difficulties we had to overcome along the way (and how we’ve done it).'
  },
  {
    day: 5,
    time: '17:30',
    date: '2018-09-05 17:30',
    speaker: 'Evening party',
    company: 'FREE FOOD, FREE BEER & GREAT PEOPLE !',
    title: '',
    agenda: 'Location:'
  },
  {
    day: 6,
    time: '09:30',
    date: '2018-09-06 09:30',
    speaker: 'Gant Laborde',
    company: 'INFINITE RED',
    title: 'Taming The Machine',
    agenda:
      '\n                Machine Learning is a buzzword, because big companies love it.  Big companies love it, because it\'s insanely cool.   Join me as we cover the breath-taking aspects of Machine Learning (ML) and dive deep into how it\'s currently showing up in mobile; especially React Native.  We\'ll touch the tip of the iceberg and spark ML creativity for everyone!\n              '
  },
  {
    day: 6,
    time: '10:00',
    date: '2018-09-06 10:00',
    speaker: 'Jani Eväkallio',
    company: 'FORMIDABLE LABS',
    title: 'This is a Talk About You',
    agenda:
      '\n                Over the last three years, I’ve spoken to hundreds of React Native developers, and slowly a picture emerges. It’s a picture of excitement and frustration, obsession with technology and pushing the boundaries. It’s a picture of you.\n                This talk will blend meticulous research, subjective personal experiences and speculative fiction to discover the core of that elusive Developer Experience, and ask the inconvenient questions you’ve always been afraid to ask.              '
  },
  {
    day: 6,
    time: '10:30',
    date: '2018-09-06 10:30',
    speaker: 'Rafael de Oleza',
    company: 'FACEBOOK',
    title: 'Building JavaScript bundles for React Native',
    agenda:
      '\n                React Native uses Metro for building the JavaScript code that runs on the devices, both during development and production.<br>\n                In this talk you\'ll learn the main concepts about bundling JavaScript code (both for web applications and React Native) and the architecture of Metro, which is focused around build speed.\n              '
  },
  {
    day: 6,
    time: '11:00',
    date: '2018-09-06 11:00',
    speaker: 'Coffee break',
    company: '',
    title: '',
    agenda: ''
  },
  {
    day: 6,
    time: '11:30',
    date: '2018-09-06 11:30',
    speaker: 'Harry Tormey',
    company: '',
    title: 'React Native Brownfield - Lessons from the Trenches',
    agenda:
      '\n                Hot reloading--the ability to push over the air updates to published apps and the promise of having your app “just work” out of the box on Android as well as iOS--make React Native a tempting proposition for frontend developers. But what do you do when you have to integrate React Native into a large existing native code base?\n              '
  },
  {
    day: 6,
    time: '12:00',
    date: '2018-09-06 12:00',
    speaker: 'Samuli Hakoniemi',
    company: 'PUNOS MOBILE',
    title: 'Better User Experience With Animations',
    agenda:
      'Most user interfaces in mobile applications are visually attractive. And it’s always a huge pleasure for developers to work together with talented designers. However an excellent UI requires even more - the art of telling a story.\n                My presentation is about enhancing the UI and UX by taking advantage of animation capabilities in React Native. During the talk, you will learn in practice when and how animations should be used and how to create an alluring story for the application.'
  },
  {
    day: 6,
    time: '12:30',
    date: '2018-09-06 12:30',
    speaker: 'Vladimir Novick',
    company: '',
    title: 'Demystifying complex animations creation process in React Native',
    agenda:
      'While Animations can be created in React Native pretty easily, real world mobile apps require a combination of several layers of animations, gestures and micro interaction animations to make user experience stand out. In this talk we will walk through the process from defining complex animation, to implementing it by going through all stages of animation creation process.'
  },
  {
    day: 6,
    time: '13:00',
    date: '2018-09-06 13:00',
    speaker: 'Lunch',
    company: '',
    title: '',
    agenda: ''
  },
  {
    day: 6,
    time: '14:00',
    date: '2018-09-06 14:00',
    speaker: 'David Vacca',
    company: 'FACEBOOK',
    title: 'The state of React Native',
    agenda:
      'This presentation will focus on core projects the React Native team is working on, particularly regarding the re-architecture of the framework.'
  },
  {
    day: 6,
    time: '14:30',
    date: '2018-09-06 14:30',
    speaker: 'Narendra Shetty',
    company: 'BOOKING.COM',
    title: 'A/B testing with React Native',
    agenda:
      '\n                A/B testing is a common practice in web world. Should that button say "click here" or "learn more"? Will the layout of your homepage materially impact app downloads? Instead of going with your gut, let data drive your product development.\n                I will be talking about how to do that in the app world using React Native, both for iOS and Android and the complexities around it. Also I plan to cover these aspects — <br>\n                – Why should you use A/B testing in your business?<br>\n                – What all can you test using A/B testing? <br>\n                – How can you do efficient A/B testing of change in your product? <br>\n              '
  },
  {
    day: 6,
    time: '15:00',
    date: '2018-09-06 15:00',
    speaker: 'Akshat Paul',
    company: 'MCKINSEY & COMPANY',
    title: 'Building apps for everyone - Accessibility with React Native',
    agenda:
      'Developers constantly strive to make stunning apps which not only solve day to day problems but augment life of their users in a way that the app becomes an important part of their lives. The examples of such disruptive apps is endless but at the same time it’s also important that an app for many does not leave few behind. In our quest for building next great app Apple and Android both provides apis to keep accessibility integral part of application design. In this talk I’ll be introducing this concept to every React Native developer and give handson how they can make use of voiceover, accessibility properties and other accessibility elements part of their RN app to make an application inclusive for all. I am equally excited to talk and give demo on this topic since such reminders have far reaching effect on developer community when they build their next app.'
  },
  {
    day: 6,
    time: '15:30',
    date: '2018-09-06 15:30',
    speaker: 'Coffee break',
    company: '',
    title: '',
    agenda: ''
  },
  {
    day: 6,
    time: '16:00',
    date: '2018-09-06 16:00',
    speaker: 'Wouter van den Broek',
    company: 'SYNAPPZ MOBILE HEALTH',
    title: 'Getting to the Native in React Native',
    agenda:
      'The Native part in React Native can look very scary and intimidated but is does not have to be that way, so in this talk you will see what the most frequent challenges are when working on the native side of React Native and how to conquer them.\n                If you attend this session you see and learn how to solve a lot of native issues that pop up when working with React Native native code and modules.<br>\n                - The basic of the React Native native module<br>\n                What Is a native module in react native, what are all the moving parts, how do the function in the total process of react native and what is the potential<br>\n                - Extending native modules<br>\n                Native modules are easy extendable, you can use other languages like Swift or Kotlin and even other platforms (Windows/Mac). Also you can extend existing native modules form others if you want to<br>\n                - Building<br>\n                Showing what happens when building, how to solve build errors, solving dependencies and to release when building succeeded<br>\n                - Tips &amp; Tricks<br>\n                Some more tips and tricks when working with native code in your react native project which I encountered in my career.\n                '
  },
  {
    day: 6,
    time: '16:30',
    date: '2018-09-06 16:30',
    speaker: 'Q&A panel',
    company: '',
    title: '',
    agenda: 'Quinlan Jung, Expo'
  },
  {
    day: 6,
    time: '17:15',
    date: '2018-09-06 17:15',
    speaker: 'Closing',
    company: '',
    title: '',
    agenda: ''
  }
];
export default data;
