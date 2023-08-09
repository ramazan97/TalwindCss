import batman from "./images/batman.jpg";
import matrix from "./images/matrix.png";
import mv1 from "./images/mv1.jpg";
import mv2 from "./images/mv2.jpg";
import mv3 from "./images/mv3.jpg";
import mv4 from "./images/mv4.jpg";
import mv5 from "./images/mv5.jpg";
import mv6 from "./images/mv6.jpg";
import new1 from "./images/new1.jpg";
import new2 from "./images/new2.jpg";
import new3 from "./images/new3.jpg";
import new4 from "./images/new4.jpg";
import new5 from "./images/new5.jpg";
import userava1 from "./images/userava1.jpg";
import userava2 from "./images/userava2.jpg";
import userava3 from "./images/userava3.jpg";
import userava4 from "./images/userava4.jpg";
import userava5 from "./images/userava5.jpg";

export default function App() {
  return (
    // tüm conta,nerler için default özelleik yazıkd
    // <div className="container">
    //   <h1 className="text-3xl font-gemunu underline text-gega-red">
    //     Hello world!
    //   </h1>
    // </div>
    <>
      {/* Header Section */}

      {/* py-6 lg:py-12
      text-4xl lg:text-6xl              
      space-x-8 lg:space-x-16 
       burda ki ifadeler kodu responsive yamak için tanımlandı lg,md.sm.xl */}

      <header className="bg-black py-6 lg:py-12 text-gega-grey  uppercase">
        {/* header container */}
        {/* items-center yatayda ortalar  */}
        {/* justify-between elemantalrın biribirne karşı uzaklıkları için kullandık */}
        {/* space-x-16 bu komut x ekseninde 16 birimlik boşuk bırak demek */}
        <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
          {/* logo */}
          {/* text-transparent textin transparaent olmasını istedik bunu yapınca text arka plan rengini aldı
          bg-gradient-to-r  görsel effectin sağdan sola doğru olmasını istedik yukarıdan assa gibi seçenekleride var
          bg-clip-text from-gega-red to-gega-grey burada textin kırmızıdan greay kadar değişmesini istedik */}
          <a
            href="#"
            className="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
          >
            GEGA
          </a>
          {/* Mobile menu */}
          <div className="block md:hidden pr-4">
            <div className="space-y-1 cursor-pointer">
              <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
              <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
              <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
            </div>
          </div>

          {/* Navigation */}
          {/* flex-1 mümkün olduğunca çok boşluğu doldurarark daha dolgun bir görünüm sağlar */}

          {/* hidden md:flex bu önemili bir özelleik eğer ekran md den daha küçün olunca 
          yazlılar ekrana sığmıyor burda hidden yaparak yazıları kaldprıp drop down olarak ayarlıypruz */}
          <nav className="hidden md:flex justify-between flex-1">
            {/* menu */}
            {/* transition yazımızın efectli olacağını geçişli olacağını söyledik
            duration-500 burdada geçiş süresini ayarladık */}
            <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500"
              >
                Movies
              </a>
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500"
              >
                Celebrities
              </a>
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500"
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500"
              >
                News
              </a>
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500"
              >
                About
              </a>
            </div>
            {/* login area */}
            <div className="flex items-center space-x-4 lg:space-x-8">
              {/* search area */}
              {/* focus:outline-none üzerine geldiğimizde kısmını focus ile alt çizğileri kaldır kısmını outline none ile yazdık
              w-44 genişliğine 44 birim dedik */}
              {/* group clasımızıda groud olarak isimlerndirdik
              opacity-0 arkaplanda kalmasını gözükmememsine söyledik
              group-hover:opacitiy-100  eğer o groubaun üzerine gelirsen opacitiy 100 yap gözük dedik
              transition duration-500 ilede geçişli bir görünüm elde dettik */}
              {/* -ml-4 negatif margin demek ml-4 posizitif margin
              group-hover:ml-0 hover olunca mlyi 0 a çek demek */}
              <form>
                <div className="group border-r px-4 mx-4 py-1 border-gega-red">
                  <input
                    type="text"
                    className="opacity-0 group-hover:opacitiy-100 transition duration-500 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44"
                  />

                  <button className="-ml-4 group-hover:ml-0 transition duration-500">
                    <i className="fas fa-search group-hover:text-gega-red transition duration-500"></i>
                  </button>
                </div>
              </form>
              {/* cursor-pointer imleçin şeklini değiştiriyor */}
              <div className="flex items-center space-x-4 lg:space-x-8 text-lg">
                <a href="#">Login</a>

                {/* whitespace-nowrap bu işlem ekran küçülünce yazımızı aşşağı atmaması için yapılıyor
                nowrap diye aratabilirisn */}

                <a
                  href="#"
                  className="bg-gega-red px-3 py-1 hover:bg-rose-600 hover:text-gega-grey cursor-pointer transition duration-500 whitespace-nowrap"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {/* group animasyonumuzun çalışması için 
      relative butolarımızın komunlarının ayarlamak için relative komutunu verdik */}
      <section className="h-96 lg:h-128 group relative ">
        {/* Hero image */}
        {/* object-cover alanı tamamıyla kapsaması için yazık */}
        <img
          src={batman}
          alt="Main Image"
          className="h-full w-full object-cover"
        />
        {/* Hero content */}
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
          {/* hero content container */}
          <div className="container pl-10 lg:pl-0">
            <h3 className="text-gega-melon tracking-wider group-hver:mb-1 duration-500">
              Action, Drama, Thriller
            </h3>
            <h1 className="text-4xl lg:text-6xl text-gega-grey group-hver:mb-1 duration-500">
              the dark knight
            </h1>
            <p className=" text-gega-grey group-hover:mb-2 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              eum tenetur aut fugiat dicta reprehenderit eaque odit quod
              molestias doloremque.
            </p>
            {/* detail container */}
            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-1000">
              {/* watch */}
              <div className="flex space-x-2 items-center cursor-pointer">
                <a
                  href="#"
                  className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500"
                >
                  Watch Trailer
                </a>
                <div className="flex h-8 w-8 rounded-full text-center items-center justify-center bg-gega-red text-gega-grey">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              {/* INfo */}
              <div className="flex space-x-2 items-center cursor-pointer">
                <a
                  href="#"
                  className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500"
                >
                  full synopsis
                </a>
                <div className="flex h-8 w-8 rounded-full text-center items-center justify-center bg-gega-red text-gega-grey">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* points */}
        <div className="flex space-x-3 absolute bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-1000">
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-red"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
        </div>
      </section>

      {/* <!--Movies Section--> */}
      <section className="py-24 bg-black">
        {/* movies Content */}
        {/* space-x-16 div imizn içerisnede kullanacağım elementler arasında 16 birimlik boşluk bıradk demek */}
        {/* <!--Movies Content--> */}
        <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
          {/* <!--Left Content--> */}
          <div className="basis-2/3">
            {/* divide bu komut yazılar arası cizgikoyuyor */}

            {/* <!--Titles--> */}
            <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
              <h2 className="text-gega-red">
                <a href="#">Latest</a>
              </h2>
              <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
                <a href="#">Popular</a>
              </h2>
              <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
                <a href="#">Best</a>
              </h2>
            </div>
            {/* <!--Images Container--> */}
            <div className="flex flex-wrap">
              {/* <!--Image 1--> */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                {/* image */}
                {/* scale-110 bu komut ile hover olunca ölçeğin bütyümesini sağladık */}
                {/* opacity-50 hover olunca opacity sini yarıya düşürdük gölge oldu */}
                <img
                  src={mv2}
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* <!--Image Detail Container--> */}
                {/* absolute içerisnde kullanıacağımız elementleri istedğimiz gibi dismek aksatlı kullandık */}
                {/* image detail container */}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, impedit.
                  </p>
                  {/* icons container */}

                  {/* hover:text-gega-red burayı group-hover olarak ayalamadık çünkü elemanın kendi hoverını yapmak isedeik */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* image2 */}
              {/* scale-110 bu komut ile hover olunca ölçeğin bütyümesini sağladık */}
              {/* opacity-50 hover olunca opacity sini yarıya düşürdük gölge oldu */}

              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3">
                {/* <!--Image--> */}
                <img
                  src={mv6}
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* <!--Image Detail Container--> */}
                {/* absolute içerisnde kullanıacağımız elementleri istedğimiz gibi dismek aksatlı kullandık */}
                {/* image detail container */}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, impedit.
                  </p>
                  {/* icons container */}

                  {/* hover:text-gega-red burayı group-hover olarak ayalamadık çünkü elemanın kendi hoverını yapmak isedeik */}

                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--Image 3--> */}
              {/* image */}
              {/* scale-110 bu komut ile hover olunca ölçeğin bütyümesini sağladık */}
              {/* opacity-50 hover olunca opacity sini yarıya düşürdük gölge oldu */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3">
                {/* <!--Image--> */}
                <img
                  src={mv1}
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* absolute içerisnde kullanıacağımız elementleri istedğimiz gibi dismek aksatlı kullandık */}
                {/* image detail container */}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, impedit.
                  </p>
                  {/* <!--Icons Container--> */}
                  {/* hover:text-gega-red burayı group-hover olarak ayalamadık çünkü elemanın kendi hoverını yapmak isedeik */}

                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--Image 4--> */}
              {/* image */}
              {/* scale-110 bu komut ile hover olunca ölçeğin bütyümesini sağladık */}
              {/* opacity-50 hover olunca opacity sini yarıya düşürdük gölge oldu */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                {/* <!--Image--> */}
                <img
                  src={mv3}
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* <!--Image Detail Container--> */}
                {/* absolute içerisnde kullanıacağımız elementleri istedğimiz gibi dismek aksatlı kullandık */}

                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, impedit.
                  </p>
                  {/* <!--Icons Container--> */}
                  {/* hover:text-gega-red burayı group-hover olarak ayalamadık çünkü elemanın kendi hoverını yapmak isedeik */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--Image 5--> */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                {/* <!--Image--> */}
                {/* image */}
                {/* scale-110 bu komut ile hover olunca ölçeğin bütyümesini sağladık */}
                {/* opacity-50 hover olunca opacity sini yarıya düşürdük gölge oldu */}
                <img
                  src={mv4}
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* <!--Image Detail Container--> */}
                {/* absolute içerisnde kullanıacağımız elementleri istedğimiz gibi dismek aksatlı kullandık */}
                {/* image detail container */}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, impedit.
                  </p>
                  {/* <!--Icons Container--> */}
                  {/* hover:text-gega-red burayı group-hover olarak ayalamadık çünkü elemanın kendi hoverını yapmak isedeik */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--Image 6--> */}
              {/* image */}
              {/* scale-110 bu komut ile hover olunca ölçeğin bütyümesini sağladık */}
              {/* opacity-50 hover olunca opacity sini yarıya düşürdük gölge oldu */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3">
                {/* <!--Image--> */}
                <img
                  src={mv5}
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* absolute içerisnde kullanıacağımız elementleri istedğimiz gibi dismek aksatlı kullandık */}
                {/* image detail container */}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, impedit.
                  </p>
                  {/* <!--Icons Container--> */}
                  {/* hover:text-gega-red burayı group-hover olarak ayalamadık çünkü elemanın kendi hoverını yapmak isedeik */}

                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--Image 7--> */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3 hidden md:block lg:hidden">
                {/* <!--Image--> */}
                <img
                  src={mv1}
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* <!--Image Detail Container--> */}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, impedit.
                  </p>
                  {/* <!--Icons Container--> */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--Image 8--> */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4  lg:basis-1/3  hidden md:block lg:hidden">
                {/* <!--Image--> */}
                <img
                  src={mv2}
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* <!--Image Detail Container--> */}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, impedit.
                  </p>
                  {/* <!--Icons Container--> */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a className="hover:text-gega-red" href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Right Content--> */}
          <div className="basis-1/3 pl-10 lg:pl-0">
            {/* <!--Title--> */}
            <h2 className="text-gega-grey mb-8">Hot News</h2>
            {/* <!--News Container--> */}
            <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
              {/* <!--Item--> */}
              <div className="flex items-center group basis-3/4 md:basis-1/2">
                {/* <!--News Image Container--> */}
                <div className="basis-1/3 h-full">
                  <img
                    src={new5}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/* <!--Item Dteail--> */}
                <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, delectus.
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    ON NOW 01 2022
                  </p>
                </div>
              </div>
              {/* <!--Item--> */}
              <div className="flex items-center group basis-3/4 md:basis-1/2">
                {/* <!--News Image Container--> */}
                <div className="basis-1/3 h-full">
                  <img
                    src={new5}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/* <!--Item Dteail--> */}
                <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, delectus.
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    ON NOW 01 2022
                  </p>
                </div>
              </div>
              {/* <!--Item--> */}
              <div className="flex items-center group basis-3/4 md:basis-1/2">
                {/* <!--News Image Container--> */}
                <div className="basis-1/3 h-full">
                  <img
                    src={new5}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/* <!--Item Dteail--> */}
                <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, delectus.
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    ON NOW 01 2022
                  </p>
                </div>
              </div>
              {/* <!--Item--> */}
              <div className="flex items-center group basis-3/4 md:basis-1/2">
                {/* <!--News Image Container--> */}
                <div className="basis-1/3 h-full">
                  <img
                    src={new5}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/* <!--Item Dteail--> */}
                <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, delectus.
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    ON NOW 01 2022
                  </p>
                </div>
              </div>
              {/* <!--Item--> */}
              <div className="flex items-center group  basis-3/4 md:basis-1/2 md:hidden lg:flex">
                {/* <!--News Image Container--> */}
                <div className="basis-1/3 h-full">
                  <img
                    src={new5}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/* <!--Item Dteail--> */}
                <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, delectus.
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    ON NOW 01 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Matrix Section--> */}
      <section className="bg-gega-white">
        {/* <!--Matris section container--> */}
        <div className="container flex items-center justify-center relative pl-10 lg:pl-0">
          {/* <!--Left Content--> */}
          <div className="hidden md:block md:basis-1/3 lg:basis-1/2">
            <img src={matrix} alt="" className="lg:absolute lg:bottom-0" />
          </div>
          {/* <!--Right Content--> */}
          <div className="md:basis-2/3 lg:basis-1/2">
            {/* <!--Right content container--> */}
            <div className="flex flex-col justify-center py-10 w-3/4 md:w-full">
              <h3 className="tracking-wider text-gega-melon">
                ACTION, DRAMA, THRILLER
              </h3>
              <h2 className="mb-2">Matrix Reloaded</h2>
              <p className="text-sm mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                unde repellat impedit consequatur soluta obcaecati totam animi
                excepturi est vero?
              </p>
              <h3 className="tracking-wider text-gega-red">
                8 wins 34 nominations
              </h3>
            </div>
          </div>

          {/* <!--Oldie--> */}
          <div className="left-10 absolute -top-12 lg:left-0 w-24 h-24 bg-gega-melon rounded-full text-center flex items-center">
            <p className="font-gemunu uppercase font-bold text-xl text-gega-red -rotate-45">
              Oldie & Goldie
            </p>
          </div>
        </div>
      </section>

      {/* <!--Post Section--> */}
      <section className="py-24 bg-black text-gega-grey">
        {/* <!--Container--> */}
        <div className="container px-10 lg:px-0">
          {/* <!--Title--> */}
          <h2 className="text-gega-red">
            <a href="#">Popular Posts</a>
          </h2>

          {/* <!--Grid Area--> */}
          <div className="grid grid-cols-6 gap-10">
            {/* <!--Item 1--> */}
            <div className="col-span-6 md:col-span-3 border border-gega-red">
              {/* <!--Item 1 Header--> */}
              <div className="border-b border-gega-red p-4 flex items-center justify-between">
                <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                <img src={userava5} alt="" className="rounded-full" />
              </div>
              {/* <!--Item 1 Para--> */}
              <p className="p-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, consequatur temporibus dolorem nihil excepturi quos.
                Amet cupiditate aperiam temporibus perferendis?
              </p>
              {/* <!--Item 1 Footer--> */}
              <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                <p>ON DEC 17, 2022</p>
                <div className="flex items-center justify-center space-x-1">
                  <i className="fa-regular fa-comment"></i>
                  <p>12</p>
                  <i className="fa-regular fa-heart"></i>
                  <p>09</p>
                </div>
              </div>
            </div>

            {/* <!--Item 2--> */}
            <div className="col-span-6 md:col-span-3 border border-gega-red">
              {/* <!--Item 1 Header--> */}
              <div className="border-b border-gega-red p-4 flex items-center justify-between">
                <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                <img src={userava4} alt="" className="rounded-full" />
              </div>
              {/* <!--Item 1 Para--> */}
              <p className="p-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, consequatur temporibus dolorem nihil excepturi quos.
                Amet cupiditate aperiam temporibus perferendis?
              </p>
              {/* <!--Item 1 Footer--> */}
              <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                <p>ON DEC 17, 2022</p>
                <div className="flex items-center justify-center space-x-1">
                  <i className="fa-regular fa-comment"></i>
                  <p>12</p>
                  <i className="fa-regular fa-heart"></i>
                  <p>09</p>
                </div>
              </div>
            </div>

            {/* <!--Item 3--> */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
              {/* <!--Item 1 Header--> */}
              <div className="border-b border-gega-red p-4 flex items-center justify-between">
                <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                {/* <img src={userava3} alt="" className="rounded-full"/> */}
              </div>
              {/* <!--Item 1 Para--> */}
              <p className="p-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, consequatur temporibus dolorem nihil excepturi quos.
                Amet cupiditate aperiam temporibus perferendis?
              </p>
              {/* <!--Item 1 Footer--> */}
              <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                <p>ON DEC 17, 2022</p>
                <div className="flex items-center justify-center space-x-1">
                  <i className="fa-regular fa-comment"></i>
                  <p>12</p>
                  <i className="fa-regular fa-heart"></i>
                  <p>09</p>
                </div>
              </div>
            </div>

            {/* <!--Item 4--> */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
              {/* <!--Item 1 Header--> */}
              <div className="border-b border-gega-red p-4 flex items-center justify-between">
                <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                <img src={userava2} alt="" className="rounded-full" />
              </div>
              {/* <!--Item 1 Para--> */}
              <p className="p-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, consequatur temporibus dolorem nihil excepturi quos.
                Amet cupiditate aperiam temporibus perferendis?
              </p>
              {/* <!--Item 1 Footer--> */}
              <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                <p>ON DEC 17, 2022</p>
                <div className="flex items-center justify-center space-x-1">
                  <i className="fa-regular fa-comment"></i>
                  <p>12</p>
                  <i className="fa-regular fa-heart"></i>
                  <p>09</p>
                </div>
              </div>
            </div>

            {/* <!--Item 5--> */}
            <div className="hidden lg:block lg:col-span-2 border border-gega-red">
              {/* <!--Item 1 Header--> */}
              <div className="border-b border-gega-red p-4 flex items-center justify-between">
                <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                <img src={userava1} alt="" className="rounded-full" />
              </div>
              {/* <!--Item 1 Para--> */}
              <p className="p-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, consequatur temporibus dolorem nihil excepturi quos.
                Amet cupiditate aperiam temporibus perferendis?
              </p>
              {/* <!--Item 1 Footer--> */}
              <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                <p>ON DEC 17, 2022</p>
                <div className="flex items-center justify-center space-x-1">
                  <i className="fa-regular fa-comment"></i>
                  <p>12</p>
                  <i className="fa-regular fa-heart"></i>
                  <p>09</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Footer Section--> */}
      <footer className="bg-black text-gega-grey">
        {/* <!--Footer Container--> */}
        <div className="container flex flex-col md:flex-row px-10 lg:px-0 pb-8">
          {/* <!--Left--> */}
          <div className="basis-1/3">
            <a
              href="#"
              className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
            >
              GEGA
            </a>
            <p className="text-sm mt-2">2022 ArinSOFT No &copy; COPYRIGHT</p>
          </div>
          {/* <!--Middle--> */}
          <div className="basis-1/3">
            <h2 className="mb-2 text-gega-red">LINKS</h2>
            <div className="grid grid-cols-5 gap-2 uppercase">
              <a
                className="col-span-2 hover:text-gega-melon duration-500"
                href="#"
              >
                Movies
              </a>
              <a
                className="col-span-2 hover:text-gega-melon duration-500"
                href="#"
              >
                Celebrities
              </a>
              <a
                className="col-span-2 hover:text-gega-melon duration-500"
                href="#"
              >
                Blog
              </a>
              <a
                className="col-span-2 hover:text-gega-melon duration-500"
                href="#"
              >
                News
              </a>
              <a
                className="col-span-2 hover:text-gega-melon duration-500"
                href="#"
              >
                Abput
              </a>
            </div>
          </div>
          {/* <!--Right--> */}
          <div className="basis-1/3">
            <h2 className="mb-2 text-gega-red">FOLLOW US</h2>
            <form action="" className="flex">
              <input
                className="py-1 px-2 bg-transparent border border-gega-red placeholder:text-xs outline-none"
                placeholder="TYPE YOUR EMAIL"
                type="text"
              />
              <button className="py-1 px-2 bg-transparent border border-gega-red bg-gega-red font-gemunu uppercase">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

// Tailwind CSS'de absolute, relative ve inline-block sınıfları, CSS'in farklı konumlandırma ve yerleştirme özelliklerini belirtmek için kullanılır.

// absolute: Bu sınıf, bir öğenin en yakın positioned (konumlandırılmış) üst öğene göre konumunu belirler. Bu sınıf kullanıldığında, bir öğenin top, right, bottom veya left özellikleri ile pozisyonu ayarlanabilir. Bu sınıf öğelerin yerlerini hassas bir şekilde kontrol etmek istediğinizde kullanışlıdır.

// relative: Bu sınıf, bir öğenin normal akışa göre konumunu ayarlamak için kullanılır. Bir öğeye relative sınıfı verildiğinde, bu öğenin top, right, bottom veya left özellikleri ile birlikte hareket ettirilebilir. Bu sınıf, bir öğeyi belirli bir konumda sabitlemek istediğinizde veya bir öğenin içinde diğer öğeleri konumlandırmak istediğinizde kullanışlıdır.

// inline-block: Bu sınıf, bir öğenin display (görüntüleme) özelliğini inline-block olarak ayarlar. Bu sınıf, öğeleri yan yana veya diğer öğelerin yanında konumlandırmak için kullanışlıdır. inline-block öğeleri, inline öğelerin yapabileceği şeyleri yapabilirler, ancak boyutları ve diğer özellikleri değiştirilebilir. Bu sınıf, bir öğeyi blok veya satır düzeyinde göstermek istediğinizde de kullanışlıdır.
