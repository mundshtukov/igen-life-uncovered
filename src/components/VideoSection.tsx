const VideoSection = () => {
  return (
    <section id="video" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Как это работает?
          </h2>
          
          <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe 
                src="https://vkvideo.ru/video_ext.php?oid=-207763595&id=456245633&hd=3&autoplay=1" 
                width="1280" 
                height="720" 
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
                frameBorder="0" 
                allowFullScreen
                className="w-full h-full"
                title="Как работают генетические тесты iGen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;