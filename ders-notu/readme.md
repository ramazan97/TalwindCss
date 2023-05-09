google font kullanımı

   <!-- google fonts -->

    <!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@400;700&family=Open+Sans&display=swap"
      rel="stylesheet"
    /> -->

    <!-- google font bitiş -->

    internetten bulduğumuz fontları index.jtml le yapıştırdık
    tailwind.config.js gelip içerisine

    extend: {
        fontFamily: {
          gemunu: ["Gemunu Libre", "sans-serif"],
          open: ["Open Sans", "sans-serif"],
        },
      },

      bu kodu yapıştırdık


      sonra istedğimiz yerde kullanabiliriz,

      <!-- <h1 className="text-3xl font-gemunu underline"> -->

renklerimizde tailwind.config.js içerisine extend ettik

      //  burada renklerimizi tanımadık
      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },

bu şekilde kod8umuzda çağırdık

<!-- <h1 className="text-3xl font-gemunu underline text-gega-red"> -->

    // burada kullanacağımız boşluğun ölçüsünğ import ettik
      spacing: {
        128: '32rem',
      },

tailwind.config.js de theme nin altına bu kodu yapıştırdık. bu kodda container classımı özelleştirmiş oldum
normal şartlarda div içeriisnde container kullanmam gerekseyde className="container mx:auto" yazamam gerekecekti tailwind css dökümantasyonunda bu şekilde amam alltki kod ile container lerimi öelleştirdim

tüm conta,nerler için default özelleik yazıkd

theme: {
container: {
center: true,
screens: {
lg: '1140px',
xl: '1140px',
'2xl': '1140px',
},
},

bu şekilde kullanabiliyoruz
<!-- <div className="container"> -->




// Tailwind CSS'de absolute, relative ve inline-block sınıfları, CSS'in farklı konumlandırma ve yerleştirme özelliklerini belirtmek için kullanılır.

// absolute: Bu sınıf, bir öğenin en yakın positioned (konumlandırılmış) üst öğene göre konumunu belirler. Bu sınıf kullanıldığında, bir öğenin top, right, bottom veya left özellikleri ile pozisyonu ayarlanabilir. Bu sınıf öğelerin yerlerini hassas bir şekilde kontrol etmek istediğinizde kullanışlıdır.

// relative: Bu sınıf, bir öğenin normal akışa göre konumunu ayarlamak için kullanılır. Bir öğeye relative sınıfı verildiğinde, bu öğenin top, right, bottom veya left özellikleri ile birlikte hareket ettirilebilir. Bu sınıf, bir öğeyi belirli bir konumda sabitlemek istediğinizde veya bir öğenin içinde diğer öğeleri konumlandırmak istediğinizde kullanışlıdır.

// inline-block: Bu sınıf, bir öğenin display (görüntüleme) özelliğini inline-block olarak ayarlar. Bu sınıf, öğeleri yan yana veya diğer öğelerin yanında konumlandırmak için kullanışlıdır. inline-block öğeleri, inline öğelerin yapabileceği şeyleri yapabilirler, ancak boyutları ve diğer özellikleri değiştirilebilir. Bu sınıf, bir öğeyi blok veya satır düzeyinde göstermek istediğinizde de kullanışlıdır.
