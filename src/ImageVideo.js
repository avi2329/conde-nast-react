function ImageVideo() {
    return (
        <>

            <div className="container">
                <img
                    className="image"
                    src="https://www.condenast.com/images/logos/conde-nast-logo-black.svg"
                    alt=""
                />
            </div>
            <div id="content">
                <video
                    id="myVideo"
                    src="https://strapi-dev2.s3.amazonaws.com/cn_reel_jan_2022_v4_mov_Original_c5bd5198ff.mp4"
                    autoPlay=""
                    loop=""
                    muted=""
                />
            </div>
        </>
    )
}
export default ImageVideo;