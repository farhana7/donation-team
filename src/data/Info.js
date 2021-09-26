const info = [
    {
        name: 'Elon Musk',
        age: 50,
        position: 'Co-founder and CEO of Tesla',
        networth: 209,
        country: 'United States',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/IyItbsK_Q8xM-qgPDkntPpoZtDc=/1665x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1215628293-c32a14bc41c34aa9adee9e41f6c7fb68.jpg'
    },
    {
        name: 'Jeff Bezos',
        age: 57,
        position: 'Founder and Executive Chair of Amazon',
        networth: 198,
        country: 'United States',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/906TFriZ9VGfK92kd2G9EX7jIxY=/1650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1036094130-cf8da629f9b44c81a0b1398311ac5787.jpg'
    },
    {
        name: 'Bernard Arnault',
        age: 71,
        position: 'CEO and Chair of LVMH (LVMUY)',
        networth: 162,
        country: 'France',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/xa7mk6am1_g40iopZBhoH7zNwu4=/1665x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-696695914-895a5475a7f8412c9239900be0ea5179.jpg'
    },
    {
        name: 'Mark Zuckerberg',
        age: 37,
        position: 'Co-founder, CEO, and Chair of Facebook (FB)',
        networth: 131,
        country: 'United States',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/G0c-XHhHMiQ_iu50SzKcXwT2Bpo=/2266x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-688402250-c3fd58b6a99a4729a821205bfac67168.jpg'
    },
    {
        name: 'Bill Gates',
        age: 65,
        position: 'Cofounder of Microsoft Corp. (MSFT)',
        networth: 129,
        country: 'United States',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/KY3JGY9GGlkJJSVupUBwunDpaIg=/2400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-948065808-ba10e6df430c414fbc496dededf1db2b.jpg'
    },
    {
        name: 'Larry Page',
        age: 48,
        position: 'Co-founder and Board Member of Alphabet (GOOG)',
        networth: 127,
        country: 'United States',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/0UB4TaNOE2Hm4NqADMIcveHUiKA=/1650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-144948913-67ccee1c4f4c4845b69f4deb67bc6c7c.jpg'
    },
    {
        name: 'Sergey Brin',
        age: 48,
        position: 'Co-founder and Board Member of Alphabet (GOOG)',
        networth: 122,
        country: 'United States',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/fxA0WWy2FqegOuhQYi1eMEbmUFg=/1650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-627820272-3ccd2a0a1b824125872f49601ef3bed6.jpg'
    },
    {
        name: 'Steve Ballmer',
        age: 65,
        position: 'owner of the Los Angeles Clippers of the National Basketball Association (NBA) and former chief executive officer of Microsoft ',
        networth: 107,
        country: 'United States',
        donation: 250,
        img: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F59d50c47a7ea436b47b36d66%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D553%26cropX2%3D2940%26cropY1%3D322%26cropY2%3D2708'
    },
    {
        name: 'Larry Ellison',
        age: 77,
        position: 'Co-founder, CTO, and Chair: of Oracle (ORCL)',
        networth: 104,
        country: 'United States',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/-T03N1ZBOcW8K-ltadp8Gggu4cc=/1521x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1183284102-5aa79849742e4d3e9916fe605a14d803.jpg'
    },
    {
        name: 'Warren Buffett',
        age: 91,
        position: 'CEO: Berkshire Hathaway (BRK.A)',
        networth: 101,
        country: 'United States',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/jq7Qo_UYPmnqn5kNcf6GYbLWhWc=/1650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-540179188-f820573a1328459cb5cedac011088d4c.jpg'
    },
    {
        name: 'Mukesh Ambani',
        age: 64,
        position: 'Chair and Managing Director: Reliance Industries',
        networth: 95.3,
        country: 'India',
        donation: 250,
        img: 'https://www.investopedia.com/thmb/5JJHvamXFzJr1AYVCPDmoioLESM=/2086x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1273603549-344d8c0dc8184b34b58b4cfe482f4ff6.jpg'
    },
    {
        name: ' Francoise Bettencourt Meyers  ',
        age: 68,
        position: "Chairwoman, L'Oréal",
        networth: 88,
        country: 'France',
        donation: 250,
        img: 'https://www.albawaba.com/sites/default/files/2021-07/bwla%20%2839%29.png'
    },

]