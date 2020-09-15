let quizdata = [
    {
        id: 1,
        quiz: "When was React.JS released ?",
        FindAnswer :["JUN 2015", "MARCH 2014", "MARCH 2013"],
        rightAnswer: "MARCH 2013"
    },
    {
        id:2,
        quiz: "In which life cycle do you make AJAX requests ?",
        FindAnswer: ["componenetWillMount", "componentDidMount", "use function"],
        rightAnswer: "componentDidMount"
    },
    {
        id:3,
        quiz: "Hello friend?",
        FindAnswer: ["That`s lame.", "You`re imaginary", "A slippery slope"],
        rightAnswer: "That`s lame"
    },
    {
        id: 4,
        quiz: "Can browsers read JSX ? ",
        FindAnswer : ["Yes", "No", "Maybe"],
        rightAnswer:"No"
    },
    {
        id: 5,
        quiz: "Programming language developed by Google",
        FindAnswer: ["GoHTML", "GoFig", "GoLang"],
        rightAnswer: "GoLang"
    },
    {
        id: 6,
        quiz: `
        <script type="text/javascript" language="javascript"> 
        var x=5; 
        var y=6; 
        var res=eval("x*y"); 
        document.write(res);`,
        FindAnswer: ["30", "30 but with quotation marks", "5*6", "None of the choices"],
        rightAnswer: "30"
    },
    {
        id: 7,
        quiz: `Time complexity of for (int i = 2; i <= n; i = pow(i, c))`,
        FindAnswer: ["O(logN)", "O(1)", "Theta(LogN)", "O(m + n)", "O(LogLogN)"],
        rightAnswer: "O(LogLogN)"
    },
    {
        id: 8,
        quiz: `<script type="text/javascript">
        var s = "9123456 or 80000?";
        var pattern = /d{4}/;
        var output = s.match(pattern);
        document.write(output);`,
        FindAnswer: ["91234", "9123", "9123456", "8000000", "None of the choices"],
        rightAnswer: "9123"
    },
    {
        id: 9,
        quiz: `How can someone change the index of the following HTML code ? "<p id="geek">GeeksforGeeks</p> "`,
        FindAnswer: [
            "document.getElement(“geek”).innerHTML=”I am a Geek”;",
            "document.getId(“geek”)=”I am a Geek”;",
            "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
            "document.getElementById(“geek”).innerHTML=I am a Geek;",
            
        ],
        rightAnswer: "document.getElementById(“geek”).innerHTML=”I am a Geek”;"
    },
    {        
        id: 10,
        quiz: 'What is the output of the code: (function(){var a= b = 3})(); console.log(``a defined ?`` + (typeof a !== `undefined`)); console.log(``a defined ?`` + (typeof a !== `undefined`));',
        FindAnswer:
        [
            'A - a defined ? = true; b defined ? = true',
            'B - a defined ? =false, b defined ? = false ',
            'C - a defined ? = false, b defined ? = true',
            'D - SyntaxError: Function statements require a function name'
        ],
        rightAnswer:  'C - a defined ? = false, b defined ? = true'
    },
    {
        id: 11,
        quiz: `Output: var myObject = {foo: bar, func: function(){\nvar self = this; console.log(outer func: this.foo = + this.foo); console.log(outer func: this.foo = + this.foo); \n(function(){console.log(outer func: this.foo = + this.foo);console.log(outer func: this.foo = + this.foo);}());}}; \nmyObject.func());`,
        FindAnswer: 
        [
            'outer func: this.foo = undefined outer func: self.foo = undefined inner func: this.foo = undefined inner fun: self.foo = bar',
            'SyntaxError: error in token : script:1',
            'outer func: this.foo = bar outer func: self.foo = bar inner func: this.foo = undefined inner fun: self.foo = bar undefined',
            'no output'
        ],
        rightAnswer: 'outer func: this.foo = bar outer func: self.foo = bar inner func: this.foo = undefined inner fun: self.foo = bar undefined'
    },
    {
        id: 12,
        quiz: `What is the tag used in HTML to create a header in an HTML file ? `,
        FindAnswer:
        [
            '<html>',
            '<p>',
            '<head>',
            '<div>',
            '<style>',
            '<H#>'
        ],
        rightAnswer: '<head>'
    },
    {
        id: 13,
        quiz:  `Which of the following is true about variable naming in Javascript ?`,
        FindAnswer: 
        [
            'JavaScript variable names must begin with a letter or the underscore character.',
            'JavaScript variable names are case sensitive.',
            'None of the choices.',
            'A & B'
        ],
        rightAnswer: 'A & B'
    }
]

export default quizdata;