import Hero from 'components/Hero/Hero';

const IndexPage = () => {
  return (
    <>
      <Hero />
      <div className="container prose">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <section key={i}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti sed sint nemo, exercitationem
              amet eum numquam similique, laborum voluptatibus impedit cum, aliquid in. Numquam vitae velit eveniet
              voluptas dignissimos!
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias vero asperiores nulla porro perspiciatis
              esse architecto eaque illo voluptatem unde mollitia sint quidem sit soluta sapiente expedita atque at, ex
              error, dolorum quasi! Dicta quis distinctio quas ratione nisi officiis saepe, quam vel aperiam magni et
              minima sed optio recusandae fugiat cumque. Optio quos autem quidem sint. Mollitia inventore ipsum nihil
              fugit voluptatibus ratione ex! Repudiandae labore recusandae, voluptates magni tempore possimus
              necessitatibus at, nesciunt nulla suscipit vitae. Ipsam vitae vel quis consectetur sapiente nobis. Ratione
              iste rerum minima aut praesentium! Blanditiis recusandae maxime voluptate dolor! In ipsam temporibus at!
            </p>
          </section>
        ))}
      </div>
    </>
  );
};

export default IndexPage;
