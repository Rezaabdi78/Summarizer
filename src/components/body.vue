<template>
    <v-container fluid class="px-6">
    <v-row align="right" >
        <v-col class="d-inline-flex thick" cols="12" xs="4" sm="6" md="4" lg="4" xl="3" color="#03A9F4">
            <v-select :items="items" label="Languages" solo></v-select>
        </v-col>
        <v-col class="d-inline-flex thick top-btn" cols="12" xs="3" sm="6" md="2" lg="2" xl="1">
            <v-btn :x-large="x_larged" color="#0f4c81" class="btn white--text" @click="textBriefer">خلاصه سازی</v-btn>
        </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="7">
                <h1 class="text-right thick ">متن ورودی</h1>
                <v-textarea rows="8" class="thin"
                outlined solo name="input"  v-model="raw_text" :placeholder="placeholder" :auto-grow="autoGrow" :clearable="clearable"></v-textarea>
            </v-col>
            <v-col cols="12" md="5">
                    <h1 class="text-right thick ">متن پردازش شده</h1>
                <div>
                    <v-textarea rows="8" class="thin output"
                outlined solo append-icon="far fa-copy" @click:append="copyText" name="input" :readonly="readonly" v-model="summarized_text.summary" v-bind:txt="summarized_text.text" :placeholder="null" :auto-grow="autoGrow" :clearable="!clearable" ></v-textarea>
               
                </div>
            </v-col>
        </v-row>

        <v-row>
                    <v-col class="d-flex thick bot-btn" cols="12" xs="3" sm="6" md="2" lg="2" xl="1">
            <v-btn :x-large="x_larged" color="#0f4c81" class="btn white--text" @click="textBriefer">خلاصه سازی</v-btn>
        </v-col>
        </v-row>
    </v-container>
</template>

    <script>
        export default {
        data: () => ({
        defaultItem: {
        id: 0,
        text: 'فارسی (Persian)',
    },
    items:[
            {
                id: 0,
                text: 'فارسی (Persian)',
            },
            {
                id: 1,
                text: 'انگلیسی (English)',
            },
            {
                id: 2,
                text: 'آلمانی (Deutch)',
            },
            {
                id: 3,
                text: 'فرانسوی (French)',
            }
        ],
        language:'',
        raw_text:'',
        summarized_text:{},
        api_key:'',

        placeholder:"متن خود را در این قسمت وارد کنید.",
        x_larged: true,
        autoGrow: true,
        clearable: true,
        readonly: true,
        }),
        methods:{
            textBriefer(e){
                e.preventDefault();
                let currentObj = this;
                this.axios.post('http://api.summarizer.syfract.com/bert',{
                    text: this.raw_text
                }).then(function (response){
                    currentObj.summarized_text = response.data;
                })
                .catch(function(error){
                    currentObj.summarized_text = error;
                })
                },
            // setResults(result){
            //     this.summarized_text = result;
            // },
            copyText(){
                this.$copyText(this.summarized_text.text).then((e)=>{
                    alert('copied:' + this.summarized_text.text)
                    console.log(e)
                },(e)=>{alert('can not copy')
                console.log(e)})
            console.log("hi im copied")
            }
        },
    }
    </script>

    <style>
    .d-inline-flex{
        direction: ltr;
    }
    .thick{
        font-family: VazirBlack;
    }
    .thin{
        font-family: Vazir;
    }
    .top-btn{
        color: cornsilk;
    }
    .bot-btn{
        visibility: hidden;
    }
    @media screen and (max-width: 960px){
        .top-btn{
            visibility: hidden;

        }
        .bot-btn{
            visibility: visible  !important
        }
    }
    </style>