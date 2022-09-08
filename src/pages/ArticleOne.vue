<template>
  <VacHeader />

  <div class="article-one">
    <div class="img-cont"></div>

    <div class="article-cont">
      <a class="back" href="#blog">
        <span class="back-arrow">❮</span>
        <span class="back-text">BACK</span>
      </a>
      <h2>10 May, 2020</h2>
      <h1>How to save on buying a car?Why is it better to buy from us</h1>
      <h3>
        Id dolore mollit excepteur magna consectetur et dolore mollit qui quis
        do ea consequat tempor. Sunt eu excepteur cupidatat aliqua anim. Aliqua
        consectetur commodo magna ea proident aliquip. Minim ipsum irure ad
        irure sint cupidatat labore. Et duis cupidatat occaecat anim fugiat qui
        nulla consequat ex. Incididunt in consequat dolore elit ut eiusmod ipsum
        eiusmod labore in consectetur nisi voluptate pariatur. Excepteur anim
        dolore ex irure voluptate minim in deserunt ad dolore reprehenderit.
        Pariatur laborum tempor irure nisi voluptate aliqua in aliquip anim
        commodo esse deserunt est commodo. Lorem nostrud incididunt commodo enim
        qui incididunt ipsum. Nostrud veniam do nostrud commodo velit incididunt
        culpa. Adipisicing commodo amet ea qui id aliqua. Cupidatat veniam enim
        sunt elit elit aute adipisicing voluptate consequat esse et consectetur
        magna incididunt. Sunt sint reprehenderit esse reprehenderit dolor id
        anim cupidatat non. Anim nulla cupidatat irure do aliqua laboris
        exercitation qui exercitation et aliquip pariatur. Et ullamco cupidatat
        fugiat ex ullamco aliquip minim nisi amet adipisicing velit. Ex commodo
        ex anim amet commodo. Tempor eu non culpa ea id ad eu aliquip dolor in
        aliqua nulla. Enim pariatur adipisicing reprehenderit eiusmod deserunt
        laborum veniam incididunt sit ullamco cillum aute sint. Qui ex Lorem
        deserunt velit elit. Occaecat pariatur fugiat eu cillum sit nulla
        excepteur incididunt. Incididunt excepteur aliquip voluptate ut deserunt
        est enim reprehenderit ullamco ut ullamco mollit incididunt aute.
        Adipisicing sunt sunt mollit proident consequat aliquip id adipisicing
        labore sit non. Occaecat incididunt id est eu reprehenderit voluptate
        quis amet veniam. Ea nulla ipsum mollit reprehenderit ullamco eiusmod
        nostrud velit Lorem dolor fugiat. Occaecat incididunt nostrud occaecat
        cillum esse ex id exercitation tempor nisi elit enim. Labore Lorem amet
        in reprehenderit officia sint minim ipsum non. Elit incididunt non nisi
        occaecat reprehenderit aute ipsum deserunt culpa aliquip officia minim.
        Adipisicing amet dolore veniam eiusmod tempor sit sint quis in sunt
        laboris dolore nulla. Id ut culpa pariatur in. Incididunt tempor ut
        dolore aute cupidatat qui enim est veniam. Irure deserunt adipisicing
        cillum nostrud occaecat cillum aute est sit. Id adipisicing aute esse
        sit aute. Cillum anim et Lorem quis ad quis duis ut ex eu deserunt.
        Irure ullamco adipisicing duis sint incididunt voluptate ipsum enim
        consectetur officia culpa elit adipisicing voluptate. Tempor anim
        deserunt ut duis qui eiusmod. Sunt reprehenderit fugiat magna sit
        reprehenderit pariatur reprehenderit non irure aliqua sit irure
        cupidatat. Sit occaecat aliqua elit qui ut commodo adipisicing fugiat
        aliqua dolore. Enim proident ipsum veniam enim elit officia officia
        tempor sint esse aliquip aliqua occaecat. Duis nostrud ex consectetur
        ad. Enim pariatur ex magna incididunt enim aute dolore id tempor anim
        irure enim cupidatat. Enim dolore dolore aute duis occaecat sint.
        Voluptate voluptate eiusmod elit irure nisi incididunt laborum fugiat
        proident quis aliquip excepteur ad ut. Veniam veniam irure Lorem dolore
        sint amet dolore. Commodo esse occaecat consectetur do id velit tempor
        deserunt consectetur id ea. Do sunt tempor laboris sit ad. Fugiat eu est
        sit voluptate incididunt laborum et aliquip in ex cupidatat minim
        adipisicing. Occaecat dolor veniam duis anim eu deserunt cupidatat
        incididunt elit commodo esse culpa culpa aliquip.Voluptate nulla amet ad
        commodo veniam consequat laborum tempor proident cupidatat aute nisi
        eiusmod laborum. Esse amet duis aliqua culpa consequat et. Laborum
        tempor commodo et exercitation consectetur aute laborum aliquip tempor
        nostrud nulla nisi labore. Tempor tempor laboris officia consectetur
        sint esse sit ad nostrud et deserunt laborum sint eu. Cillum laboris et
        sint reprehenderit deserunt. Laborum labore incididunt duis mollit est
        anim reprehenderit consectetur enim fugiat veniam deserunt eiusmod.
        Irure sunt aute cupidatat qui qui consequat amet tempor. In officia est
        velit veniam magna proident adipisicing eu non labore mollit ad anim ut.
        Sit cillum in ea qui minim commodo labore nisi irure duis. Ea do laborum
        id adipisicing et cillum occaecat est laborum eu consequat ad commodo. А
      </h3>
    </div>
  </div>

  <InterestingBlog />
  <VacFooter />
</template>

<script>
import VacHeader from "@/components/Header.vue";
import VacFooter from "@/components/VacFooter.vue";
import InterestingBlog from "@/components/InterestingBlog.vue";

export default {
  name: "ArticleOne",
  components: {
    VacHeader,
    InterestingBlog,
    VacFooter,
  },
  methods: {},
};
</script>

<style scope lang="scss">
.article-one {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  font-family: "Gilroy";
  font-style: normal;

  .img-cont {
    width: 100%;
    height: 200px;
    background-image: url(@/assets/articlebg.png);
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
  }
  .article-cont {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 4%;
    background-color: white;
    border-radius: 5px 5px 0px 0px;
    margin: 10% auto 0;
    z-index: 5;
    .back {
      text-decoration: none;
      position: absolute;
      top: 7%;
      left: -10%;
      font-weight: 700;
      font-size: 16px;
      line-height: 14px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #606276;
      .back-arrow {
        margin-right: 10px;
      }
    }
    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 180%;
      letter-spacing: 0.02em;
      color: #606276;
      margin: 0;
    }
    h1 {
      font-weight: 700;
      font-size: 45px;
      line-height: 140.5%;
      color: #41456b;
      margin: 2% 0;
    }
    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 180%;
      letter-spacing: 0.02em;
      color: #7c7a84;
      margin: 0;
    }
  }
}
@media (max-width: 900px) {
  .article-one {
    .article-cont {
      width: 85%;
      margin-top: 18%;
      a {
        top: 5.5%;
        left: 0;
        font-weight: 100;
        font-size: 22px;
        .back-text {
          display: none;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .article-one {
    .img-cont {
      width: 100%;
      height: 140px;

      position: relative;
    }
    .article-cont {
      width: 85%;
      padding: 7.5%;
      margin-top: 0;
      h1{
       font-size: 30px; 
      }
      h2 {
        text-align: right;
      }
      a {
        top: 36px;
        left: 28px;
        .back-text {
          display: inline-block;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
