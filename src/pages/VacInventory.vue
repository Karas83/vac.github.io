<template>
  <VacHeader />
  <div class="inventory">
    <div class="filter filter-hide">
      <div class="filter-tittle">
        <h1>Detailed search</h1>
        <h2 @click="reset">Clear filters</h2>
      </div>

      <AccordionList>
        <AccordionItem>
          <template #summary> Make, Model </template>
          <template #icon
            ><img src="@/assets/arrowbottom.png" alt=""
          /></template>
          <div>
            <h3>Make</h3>
            <v-select
              class="select select-make"
              multiple
              v-model="makes"
              :options="['Porshe', 'Mitsubishi', 'Mercedes-Benz', 'Audi']"
              placeholder="Search Make..."
            ></v-select>
          </div>
          <div>
            <h3>Model</h3>
            <v-select
              class="select"
              multiple
              v-model="models"
              :options="[
                'Panamera II Turbo S E-Hybrid',
                'Outlander III Restyling 3',
                'CLA I (C117, X117) 200',
                'W124 420',
                'E-Class III (W211, S211) Restyling 230',
                'A7 I (4G) S-tronic',
              ]"
              placeholder="Search Model..."
            ></v-select>
          </div>
        </AccordionItem>
        <div class="filter-item">
          <div v-for="(product, index) in models" :key="product">
            <label @click="deleteModel(index)"
              ><span>╳</span>{{ product }}</label
            >
          </div>
          <div v-for="(product, index) in makes" :key="product">
            <label @click="deleteMake(index)"
              ><span>╳</span>{{ product }}</label
            >
          </div>
        </div>
      </AccordionList>

      <AccordionList>
        <AccordionItem>
          <template #summary> Body type </template>
          <template #icon
            ><img src="@/assets/arrowbottom.png" alt=""
          /></template>
          <div class="body-item">
            <input type="checkbox" id="Trucks" value="Trucks" v-model="bodys" />
            &nbsp;
            <label for="Trucks"
              ><img src="@/assets/Truckicon.png" alt="" />&nbsp;Trucks</label
            >
          </div>
          <div class="body-item">
            <input type="checkbox" id="SUV" value="SUV" v-model="bodys" />
            &nbsp;
            <label for="SUV"
              ><img src="@/assets/SUVicon.png" alt="" />&nbsp;SUV</label
            >
          </div>
          <div class="body-item">
            <input type="checkbox" id="Sedan" value="Sedan" v-model="bodys" />
            &nbsp;
            <label for="Sedan"
              ><img src="@/assets/Sedanicon.png" alt="" />&nbsp;Sedan</label
            >
          </div>
          <div class="body-item">
            <input
              type="checkbox"
              id="Hatchback"
              value="Hatchback"
              v-model="bodys"
            />
            &nbsp;
            <label for="Hatchback"
              ><img
                src="@/assets/Hatchbackicon.png"
                alt=""
              />&nbsp;Hatchback</label
            >
          </div>
          <div class="body-item">
            <input type="checkbox" id="Coupe" value="Coupe" v-model="bodys" />
            &nbsp;
            <label for="Coupe">
              <img src="@/assets/Coupeicon.png" alt="" />&nbsp;Coupe</label
            >
          </div>
          <div class="body-item">
            <input
              type="checkbox"
              id="Convertiable"
              value="Convertiable"
              v-model="bodys"
            />
            &nbsp;
            <label for="Convertiable"
              ><img
                src="@/assets/Convertiableicon.png"
                alt=""
              />&nbsp;Convertiable</label
            >
          </div>
          <div class="body-item">
            <input type="checkbox" id="VAN" value="VAN" v-model="bodys" />
            &nbsp;
            <label for="VAN"
              ><img src="@/assets/VANicon.png" alt="" />&nbsp;VAN</label
            >
          </div>
        </AccordionItem>
        <div class="filter-item">
          <div v-for="product in bodys" :key="product">
            <label :for="product"><span>╳</span>{{ product }}</label>
          </div>
        </div>
      </AccordionList>
      <AccordionList>
        <AccordionItem>
          <template #summary> Transmission </template>
          <template #icon
            ><img src="@/assets/arrowbottom.png" alt=""
          /></template>
          <div class="body-item">
            <input
              type="checkbox"
              id="Auto"
              value="Auto"
              v-model="transmissions"
            />&nbsp;
            <label for="Auto">Auto</label>
          </div>
          <div class="body-item">
            <input
              type="checkbox"
              id="Manual"
              value="Manual"
              v-model="transmissions"
            />&nbsp;
            <label for="Manual">Manual</label>
          </div>
        </AccordionItem>
        <div class="filter-item">
          <div v-for="product in transmissions" :key="product">
            <label :for="product"><span>╳</span>{{ product }}</label>
          </div>
        </div>
      </AccordionList>

      <AccordionList>
        <AccordionItem>
          <template #summary> Price </template>
          <template #icon
            ><img src="@/assets/arrowbottom.png" alt=""
          /></template>
          <div class="range-titte">
            <span>$ {{ minPrice }}</span>
            <span>$ {{ maxPrice }}</span>
          </div>
          <MultiRangeSlider
            baseClassName="multi-range-slider-bar-only"
            :min="0"
            :max="500000"
            :step="1000"
            :minValue="minPrice"
            :maxValue="maxPrice"
            @input="UpdateValues"
          />
        </AccordionItem>
        <div class="filter-item">
          <div @click="resetminPrice" v-if="minPrice > 0">
            <span>╳</span>MIN $ {{ minPrice }}
          </div>
          <div @click="resetmaxPrice" v-if="maxPrice < 500000">
            <span>╳</span>MAX $ {{ maxPrice }}
          </div>
        </div>
      </AccordionList>

      <AccordionList>
        <AccordionItem>
          <template #summary> Year </template>
          <template #icon
            ><img src="@/assets/arrowbottom.png" alt=""
          /></template>
          <div class="range-titte">
            <span> {{ minYear }}</span>
            <span> {{ maxYear }}</span>
          </div>
          <MultiRangeSlider
            baseClassName="multi-range-slider-bar-only"
            :min="1990"
            :max="2022"
            :step="1"
            :minValue="minYear"
            :maxValue="maxYear"
            @input="UpdateValues2"
          />
        </AccordionItem>
        <div class="filter-item">
          <div @click="resetminYear" v-if="minYear > 1990">
            <span>╳</span>MIN {{ minYear }}
          </div>
          <div @click="resetmaxYear" v-if="maxYear < 2020">
            <span>╳</span>MAX {{ maxYear }}
          </div>
        </div>
      </AccordionList>

      <AccordionList>
        <AccordionItem>
          <template #summary> Kilometres </template>
          <template #icon
            ><img src="@/assets/arrowbottom.png" alt=""
          /></template>
          <div class="range-titte">
            <span> {{ minKilo }} or less</span>
          </div>
          <div class="kilo">
            <MultiRangeSlider
              baseClassName="multi-range-slider-bar-only"
              :min="0"
              :max="1000000"
              :step="10000"
              :minValue="minKilo"
              :maxValue="maxKilo"
              @input="UpdateValues3"
            />
          </div>
        </AccordionItem>
        <div class="filter-item">
          <div @click="resetminKilo" v-if="minKilo < 990000 && minKilo > 0">
            <span>╳</span>{{ minKilo }} or less
          </div>
        </div>
      </AccordionList>
    </div>
    <div class="main">
      <div class="main-search">
        <div @click="showModaltwo" class="search-filter">
          <img src="@/assets/Filtericon.png" alt="" />
          <h1>Search Filter</h1>
        </div>
        <v-select
          class="search-fullnames"
          multiple
          v-model="fullnames"
          :options="[
            'Porshe Panamera II Turbo S E-Hybrid',
            'Mitsubishi Outlander III Restyling 3',
            'Mercedes-Benz CLA I (C117, X117) 200',
            'Mercedes-Benz W124 420',
            'Mercedes-Benz E-Class III (W211, S211) Restyling 230',
            'Audi A7 I (4G) S-tronic',
          ]"
          placeholder="Find a dream car..."
        ></v-select>
        <v-select
          class="search-sort"
          v-model="sortcars"
          :options="['Lowest price', 'Highest prices', 'Recommendations']"
          placeholder="Sorted by "
        ></v-select>
      </div>
      <div class="main-kards">
        <div class="zaglyshka" v-if="zagl === 0">
          <img src="@/assets/zaglyshkaicon.png" alt="" />
          <h1>Unfortunately there are no matches for your query.</h1>
          <h2>
            Try using other filter settings or request a car of your choice.
          </h2>
          <WhiteButton
            @click="goTo405"
            class="inventory__WhiteButton"
            ButtonText="Request a car"
          />
        </div>
        <div class="car-card-cont" v-else>
          <div class="car-kard" v-for="product in zagl" :key="product">
            <CarKard
              v-bind:make="product.make"
              v-bind:model="product.model"
              v-bind:price="product.price"
              v-bind:year="product.year"
              v-bind:body="product.body"
              v-bind:transmission="product.transmission"
              v-bind:kilometre="product.kilometre"
              v-bind:refpass="product.refpass"
              v-bind:img="product.img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <InventoryModal />

  <inventory-modal ref="modal"></inventory-modal>

  <inventory-modal ref="modaltwo">
    <template v-slot:body>
      <div class="filter">
        <div class="filter-tittle">
          <h1>Detailed search</h1>
          <h2 @click="reset">Clear filters</h2>
        </div>

        <AccordionList>
          <AccordionItem>
            <template #summary> Make, Model </template>
            <template #icon
              ><img src="@/assets/arrowbottom.png" alt=""
            /></template>
            <div>
              <h3>Make</h3>
              <v-select
                class="select select-make"
                multiple
                v-model="makes"
                :options="['Porshe', 'Mitsubishi', 'Mercedes-Benz', 'Audi']"
                placeholder="Search Make..."
              ></v-select>
            </div>
            <div>
              <h3>Model</h3>
              <v-select
                class="select"
                multiple
                v-model="models"
                :options="[
                  'Panamera II Turbo S E-Hybrid',
                  'Outlander III Restyling 3',
                  'CLA I (C117, X117) 200',
                  'W124 420',
                  'E-Class III (W211, S211) Restyling 230',
                  'A7 I (4G) S-tronic',
                ]"
                placeholder="Search Model..."
              ></v-select>
            </div>
          </AccordionItem>
          <div class="filter-item">
            <div v-for="(product, index) in models" :key="product">
              <label @click="deleteModel(index)"
                ><span>╳</span>{{ product }}</label
              >
            </div>
            <div v-for="(product, index) in makes" :key="product">
              <label @click="deleteMake(index)"
                ><span>╳</span>{{ product }}</label
              >
            </div>
          </div>
        </AccordionList>

        <AccordionList>
          <AccordionItem>
            <template #summary> Body type </template>
            <template #icon
              ><img src="@/assets/arrowbottom.png" alt=""
            /></template>
            <div class="body-item">
              <input
                type="checkbox"
                id="Trucks"
                value="Trucks"
                v-model="bodys"
              />
              &nbsp;
              <label for="Trucks"
                ><img src="@/assets/Truckicon.png" alt="" />&nbsp;Trucks</label
              >
            </div>
            <div class="body-item">
              <input type="checkbox" id="SUV" value="SUV" v-model="bodys" />
              &nbsp;
              <label for="SUV"
                ><img src="@/assets/SUVicon.png" alt="" />&nbsp;SUV</label
              >
            </div>
            <div class="body-item">
              <input type="checkbox" id="Sedan" value="Sedan" v-model="bodys" />
              &nbsp;
              <label for="Sedan"
                ><img src="@/assets/Sedanicon.png" alt="" />&nbsp;Sedan</label
              >
            </div>
            <div class="body-item">
              <input
                type="checkbox"
                id="Hatchback"
                value="Hatchback"
                v-model="bodys"
              />
              &nbsp;
              <label for="Hatchback"
                ><img
                  src="@/assets/Hatchbackicon.png"
                  alt=""
                />&nbsp;Hatchback</label
              >
            </div>
            <div class="body-item">
              <input type="checkbox" id="Coupe" value="Coupe" v-model="bodys" />
              &nbsp;
              <label for="Coupe">
                <img src="@/assets/Coupeicon.png" alt="" />&nbsp;Coupe</label
              >
            </div>
            <div class="body-item">
              <input
                type="checkbox"
                id="Convertiable"
                value="Convertiable"
                v-model="bodys"
              />
              &nbsp;
              <label for="Convertiable"
                ><img
                  src="@/assets/Convertiableicon.png"
                  alt=""
                />&nbsp;Convertiable</label
              >
            </div>
            <div class="body-item">
              <input type="checkbox" id="VAN" value="VAN" v-model="bodys" />
              &nbsp;
              <label for="VAN"
                ><img src="@/assets/VANicon.png" alt="" />&nbsp;VAN</label
              >
            </div>
          </AccordionItem>
          <div class="filter-item">
            <div v-for="product in bodys" :key="product">
              <label :for="product"><span>╳</span>{{ product }}</label>
            </div>
          </div>
        </AccordionList>
        <AccordionList>
          <AccordionItem>
            <template #summary> Transmission </template>
            <template #icon
              ><img src="@/assets/arrowbottom.png" alt=""
            /></template>
            <div class="body-item">
              <input
                type="checkbox"
                id="Auto"
                value="Auto"
                v-model="transmissions"
              />&nbsp;
              <label for="Auto">Auto</label>
            </div>
            <div class="body-item">
              <input
                type="checkbox"
                id="Manual"
                value="Manual"
                v-model="transmissions"
              />&nbsp;
              <label for="Manual">Manual</label>
            </div>
          </AccordionItem>
          <div class="filter-item">
            <div v-for="product in transmissions" :key="product">
              <label :for="product"><span>╳</span>{{ product }}</label>
            </div>
          </div>
        </AccordionList>

        <AccordionList>
          <AccordionItem>
            <template #summary> Price </template>
            <template #icon
              ><img src="@/assets/arrowbottom.png" alt=""
            /></template>
            <div class="range-titte">
              <span>$ {{ minPrice }}</span>
              <span>$ {{ maxPrice }}</span>
            </div>
            <MultiRangeSlider
              baseClassName="multi-range-slider-bar-only"
              :min="0"
              :max="500000"
              :step="1000"
              :minValue="minPrice"
              :maxValue="maxPrice"
              @input="UpdateValues"
            />
          </AccordionItem>
          <div class="filter-item">
            <div @click="resetminPrice" v-if="minPrice > 0">
              <span>╳</span>MIN $ {{ minPrice }}
            </div>
            <div @click="resetmaxPrice" v-if="maxPrice < 500000">
              <span>╳</span>MAX $ {{ maxPrice }}
            </div>
          </div>
        </AccordionList>

        <AccordionList>
          <AccordionItem>
            <template #summary> Year </template>
            <template #icon
              ><img src="@/assets/arrowbottom.png" alt=""
            /></template>
            <div class="range-titte">
              <span> {{ minYear }}</span>
              <span> {{ maxYear }}</span>
            </div>
            <MultiRangeSlider
              baseClassName="multi-range-slider-bar-only"
              :min="1990"
              :max="2022"
              :step="1"
              :minValue="minYear"
              :maxValue="maxYear"
              @input="UpdateValues2"
            />
          </AccordionItem>
          <div class="filter-item">
            <div @click="resetminYear" v-if="minYear > 1990">
              <span>╳</span>MIN {{ minYear }}
            </div>
            <div @click="resetmaxYear" v-if="maxYear < 2020">
              <span>╳</span>MAX {{ maxYear }}
            </div>
          </div>
        </AccordionList>

        <AccordionList>
          <AccordionItem>
            <template #summary> Kilometres </template>
            <template #icon
              ><img src="@/assets/arrowbottom.png" alt=""
            /></template>
            <div class="range-titte">
              <span> {{ minKilo }} or less</span>
            </div>
            <div class="kilo">
              <MultiRangeSlider
                baseClassName="multi-range-slider-bar-only"
                :min="0"
                :max="1000000"
                :step="10000"
                :minValue="minKilo"
                :maxValue="maxKilo"
                @input="UpdateValues3"
              />
            </div>
          </AccordionItem>
          <div class="filter-item">
            <div @click="resetminKilo" v-if="minKilo < 990000 && minKilo > 0">
              <span>╳</span>{{ minKilo }} or less
            </div>
          </div>
        </AccordionList>
      </div>
    </template>
  </inventory-modal>

  <VacFooter />
</template>

<script>
import VacHeader from "@/components/Header.vue";
import CarKard from "@/components/CarKard.vue";
import VacFooter from "@/components/VacFooter.vue";
import WhiteButton from "@/components/WhiteButton.vue";

import InventoryModal from "@/components/InventoryModal.vue";

import { AccordionItem } from "vue3-rich-accordion";
import "vue3-rich-accordion/accordion-library-styles.css";

import MultiRangeSlider from "multi-range-slider-vue";
import "../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";

import "vue-select/dist/vue-select.css";

export default {
  name: "VacInventory",
  components: {
    VacHeader,
    MultiRangeSlider,
    CarKard,
    AccordionItem,
    VacFooter,
    WhiteButton,
    InventoryModal,
  },

  methods: {
    goTo405() {
      this.$router.push("/405");
    },
    showModaltwo: function () {
      this.$refs.modaltwo.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },

    UpdateValues(e) {
      this.minPrice = e.minValue;
      this.maxPrice = e.maxValue;
    },
    UpdateValues2(e) {
      this.minYear = e.minValue;
      this.maxYear = e.maxValue;
    },
    UpdateValues3(e) {
      this.minKilo = e.minValue;
      this.maxKilo = e.maxValue;
    },

    reset() {
      this.minPrice = 0;
      this.maxPrice = 500000;
      this.minYear = 1990;
      this.maxYear = 2022;
      this.minKilo = 990000;
      this.maxKilo = 1000000;
      this.fullnames = [];
      (this.sortcars = []), (this.makes = []);
      this.models = [];
      this.bodys = [];
      this.transmissions = [];
    },
    deleteMake: function (index) {
      this.makes.splice(index, 1);
    },
    deleteModel: function (index) {
      this.models.splice(index, 1);
    },
    resetminPrice() {
      this.minPrice = 0;
    },
    resetmaxPrice() {
      this.maxPrice = 500000;
    },
    resetminYear() {
      this.minYear = 1990;
    },
    resetmaxYear() {
      this.maxYear = 2022;
    },
    resetminKilo() {
      this.minKilo = 990000;
    },
  },

  data() {
    return {
      fullnames: [],
      sortcars: [],
      makes: [],
      models: [],
      transmissions: [],
      bodys: [],
      minPrice: 0,
      maxPrice: 500000,
      minYear: 1990,
      maxYear: 2022,
      minKilo: 990000,
      maxKilo: 1000000,

      zagly: [
        {
          make: "no items",
        },
      ],
      cars: [
        {
          fullname: "Porshe Panamera II Turbo S E-Hybrid",
          make: "Porshe",
          model: "Panamera II Turbo S E-Hybrid",
          price: 150000,
          year: 2012,
          body: "Sedan",
          transmission: "Auto",
          kilometre: 50000,
          rating: 1,
          img: "Porshe.png",
          refpass: "/carpage",
        },
        {
          fullname: "Mitsubishi Outlander III Restyling 3",
          make: "Mitsubishi",
          model: "Outlander III Restyling 3",
          price: 23500,
          year: 2011,
          body: "SUV",
          transmission: "Auto",
          kilometre: 100000,
          rating: 5,
          img: "Mitsubishi.png",
          refpass: "/carpage",
        },
        {
          fullname: "Mercedes-Benz CLA I (C117, X117) 200",
          make: "Mercedes-Benz",
          model: "CLA I (C117, X117) 200",
          price: 150000,
          year: 2017,
          body: "Coupe",
          transmission: "Manual",
          kilometre: 80000,
          rating: 2,
          img: "Mercedes1.png",
          refpass: "/carpage",
        },
        {
          fullname: "Mercedes-Benz W124 420",
          make: "Mercedes-Benz",
          model: "W124 420",
          price: 15000,
          year: 2001,
          body: "Convertiable",
          transmission: "Manual",
          kilometre: 200000,
          rating: 6,
          img: "Mercedes2.png",
          refpass: "/carpage",
        },
        {
          fullname: "Mercedes-Benz E-Class III (W211, S211) Restyling 230",
          make: "Mercedes-Benz",
          model: "E-Class III (W211, S211) Restyling 230",
          price: 30000,
          year: 2010,
          body: "Hatchback",
          transmission: "Manual",
          kilometre: 90000,
          rating: 4,
          img: "Mercedes3.png",
          refpass: "/carpage",
        },
        {
          fullname: "Audi A7 I (4G) S-tronic",
          make: "Audi",
          model: "A7 I (4G) S-tronic",
          price: 200000,
          year: 2019,
          body: "Convertiable",
          transmission: "Auto",
          kilometre: 55000,
          rating: 3,
          img: "Audi.png",
          refpass: "/carpage",
        },
      ],
    };
  },
  computed: {
    sortCar() {
      let data = [];
      if (this.sortcars == "Lowest price") {
        data = [...this.cars].sort((a, b) => a.price - b.price);
      } else if (this.sortcars == "Highest prices") {
        data = [...this.cars].sort((a, b) => b.price - a.price);
      } else if (this.sortcars == "Recommendations") {
        data = [...this.cars].sort((a, b) => a.rating - b.rating);
      } else {
        data = this.cars;
      }

      return data;
    },

    filterFullname() {
      let data = [];
      if (this.fullnames.length) {
        data = this.sortCar.filter(
          (x) => this.fullnames.indexOf(x.fullname.toString()) != -1
        );
      } else {
        data = this.sortCar;
      }

      return data;
    },

    filterMake() {
      let data = [];
      if (this.makes.length) {
        data = this.filterFullname.filter(
          (x) => this.makes.indexOf(x.make.toString()) != -1
        );
      } else {
        data = this.filterFullname;
      }

      return data;
    },

    filterModel() {
      let data = [];
      if (this.models.length) {
        data = this.filterMake.filter(
          (x) => this.models.indexOf(x.model.toString()) != -1
        );
      } else {
        data = this.filterMake;
      }

      return data;
    },

    filterBody() {
      let data = [];
      if (this.bodys.length) {
        data = this.filterModel.filter(
          (x) => this.bodys.indexOf(x.body.toString()) != -1
        );
      } else {
        data = this.filterModel;
      }

      return data;
    },

    filteTransmission() {
      let data = [];
      if (this.transmissions.length) {
        data = this.filterBody.filter(
          (x) => this.transmissions.indexOf(x.transmission.toString()) != -1
        );
      } else {
        data = this.filterBody;
      }

      return data;
    },

    filterPrice() {
      let data = [];

      data = this.filteTransmission.filter(
        (x) => x.price >= this.minPrice && x.price <= this.maxPrice
      );

      return data;
    },
    filterYear() {
      let data = [];

      data = this.filterPrice.filter(
        (x) => x.year >= this.minYear && x.year <= this.maxYear
      );

      return data;
    },
    filterKilo() {
      let data = [];

      if (this.minKilo === 0) {
        data = this.filterYear;
      } else {
        data = this.filterYear.filter((x) => x.kilometre <= this.minKilo);
      }

      return data;
    },

    zagl() {
      let data = [];
      // если есть выбранные чекбоксы
      if (this.filterKilo.length) {
        // фильтруем данные
        data = this.filterKilo;
      } else {
        // иначе отдаем все данные из массива
        data = 0;
      }

      return data;
    },
  },
};
</script>

<style  lang="scss">
.inventory {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  padding: 0 7.5%;
  font-family: "Gilroy";
  font-style: normal;
  margin-top: 2.5%;
}
.filter {
  display: flex;
  flex-direction: column;
  width: 23%;
  margin-bottom: 5%;
  font-family: "Gilroy";
  font-style: normal;
  .accordion-list {
    border: 1px solid #d7d7d7;
    width: 100%;
    margin: 2% 0;
  }
  .accordion-list .accordion-item {
    border: none;
  }
  .vs__dropdown-menu {
    position: relative;
  }
  .select-make {
    width: 100%;
    .vs__dropdown-menu {
      min-width: 0;
      max-height: 300px;
      width: 100%;
      border: 1px solid #d7d7d7;
    }
    .vs__selected-options {
      margin-right: 20px;
    }
    .vs__selected {
      background-color: white;
    }
    .vs__dropdown-toggle {
      padding: 5px;
    }
    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 14px;
      color: #41456b;
    }
  }
  .filter-tittle {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #41456b;
      margin-top: 0;
    }
    h2 {
      font-weight: 500;
      font-size: 16px;
      line-height: 159%;
      color: #7481ff;
      margin-top: 0;
      cursor: pointer;
    }
  }
  .filter-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    div {
      display: flex;
      flex-direction: row;
      background-color: rgba(116, 129, 255, 0.2);
      padding: 12px;
      margin: 10px;
      cursor: pointer;
      label {
        display: flex;
      }
      span {
        font-size: 12px;
        color: #7481ff;
        font-weight: 900;
        margin-right: 5px;
      }
    }
  }
  .body-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    margin-top: 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #41456b;
    input {
      width: 20px;
      height: 20px;
    }
  }
}
.range-titte {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456b;
}
.main {
  display: flex;
  flex-direction: column;
  width: 75%;
  .main-search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    .search-filter {
      display: none;
      flex-direction: row;
      align-items: center;
      img {
        height: 22px;
      }
      h1 {
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456b;
        margin: 0 0 0 10px;
      }
    }
    .search-fullnames {
      width: 30%;

      background-image: url(@/assets/search.png);
      background-position: right;
      background-repeat: no-repeat;
      .vs__dropdown-menu {
        max-height: 300px;
        border: 1px solid #d7d7d7;
      }
      .vs__selected-options {
        margin-right: 20px;
      }
      .vs__selected {
        background-color: white;
      }

      .vs__actions {
        display: none;
      }
    }
    .search-sort {
      width: 30%;
      .vs__dropdown-menu {
        max-height: 300px;
        border: 1px solid #d7d7d7;
      }
    }
  }
  .main-kards {
    display: flex;
    width: 100%;
    margin-top: 2.5%;
    .car-card-cont {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
    .car-kard {
      width: 49%;
      margin-bottom: 2%;
      a {
        height: auto;
      }
    }
    .zaglyshka {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 5%;
      background: #ffffff;
      border-radius: 5px;
      font-family: "Gilroy";
      font-style: normal;
      box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
      margin-bottom: 10%;
      img {
        width: 100px;
      }
      h2 {
        font-weight: 400;
        font-size: 25px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456b;
      }
      .inventory__WhiteButton {
        width: 30%;
      }
    }
  }
}

.select {
  .vs__selected {
    display: none;
  }
}

.multi-range-slider-bar-only .bar-inner {
  background: #7481ff;
  border: none;
  box-shadow: none;
}
.multi-range-slider-bar-only .thumb:active .caption {
  display: none;
}
.multi-range-slider-bar-only .thumb::before {
  background: #7481ff;
  border: none;
  box-shadow: none;
  border-radius: 0%;
}
.multi-range-slider-bar-only .bar-right {
  background-color: #d7d7d7;
  border-radius: 0;
  box-shadow: none;
}
.multi-range-slider-bar-only .bar-left {
  background-color: #d7d7d7;
  border-radius: 0;
  box-shadow: none;
}
.kilo {
  .multi-range-slider-bar-only .bar-left {
    background: rgb(116, 129, 255);
  }
  .multi-range-slider-bar-only .bar-inner-left {
    background-color: #d7d7d7;
  }
  .multi-range-slider-bar-only .bar-inner-right {
    background-color: #d7d7d7;
  }
  .multi-range-slider-bar-only .thumb-right {
    display: none;
  }
}
@media (max-width: 900px) {
  .inventory {
    width: 95%;
    padding: 0 2.5%;
  }
  .filter-hide {
    display: none;
  }
  .main {
    width: 100%;
    .main-search {
      .search-filter {
        display: flex;
        h1 {
          display: block;
        }
      }
    }
  }
  .filter {
    width: 60%;
    margin: 10% auto 5%;
  }
  .main .main-kards .zaglyshka .inventory__WhiteButton {
    width: 50%;
  }
}
@media (max-width: 600px) {
  .main .main-kards .car-kard {
    width: 100%;
  }
  .main {
    width: 100%;
    .main-search {
      .search-fullnames {
        width: 90%;
      }
      .search-sort {
        width: 100%;
        margin: 5% 0;
      }
      .search-filter {
        h1 {
          display: none;
        }
      }
    }
  }
  .filter {
    width: 90%;
    margin-top: 1%;
  }
  .main .main-kards .zaglyshka .inventory__WhiteButton {
    width: 100%;
  }
}
</style>
