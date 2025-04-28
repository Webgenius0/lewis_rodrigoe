import Subtitile from '../shared/Subtitile';
import Title from '../shared/Title';

const Faq = () => {
  return (
    <>
      <section>
        <div className="container mt-14">
          <div className="content-wrapper">
            <div className="max-w-[978px] mx-auto flex flex-col gap-3 mb-4">
              <Subtitile text="FAQ" className="text-center justify-center" />
              <Title title="HouseMate </br> Explained" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;