import './about.css';
export default function Gallery(){
    const data = [
        {img:'/gallery/1.webp'},
        {img:'/gallery/2.webp'},
        {img:'/gallery/3.webp'},
    {img:'/gallery/4.webp'},
    {img:'/gallery/5.webp'},
    {img:'/gallery/6.webp'},
    {img:'/gallery/7.webp'},
    {img:'/gallery/8.webp'},
    {img:'/gallery/9.webp'},
    {img:'/gallery/10.webp'},
    {img:'/gallery/11.webp'},
    {img:'/gallery/12.webp'},
    {img:'/gallery/13.webp'},
    {img:'/gallery/14.webp'},
    {img:'/gallery/15.webp'},
    {img:'/gallery/16.webp'},
    {img:'/gallery/17.webp'},
    {img:'/gallery/18.webp'},
    {img:'/gallery/19.webp'},
    {img:'/gallery/20.webp'},
    {img:'/gallery/21.webp'},
    {img:'/gallery/22.webp'}
    ];
    return(
        <div className="Gallery_container">
            <div className='Gallery_heading'>
                <span>
                    <a href="/">Home</a>&nbsp; &gt; &nbsp;<strong>Gallery</strong>
                </span>
                <h1>Gallery</h1>
            </div>
            <div className='gallery-photos'>
            {data.map((item, index) => (
                    <img key={index}  className="imgp" src={item.img} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}


