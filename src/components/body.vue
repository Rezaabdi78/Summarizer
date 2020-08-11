<template>
    <div>
        <header class="headerWrapper">
            <div class="headerCover">
                <h1 class="headerTitle thick mb-4">خلاصه‌ساز هوشمند متن</h1>
                <h3 class="headerSubtitle"><!-- Subtitle Text here --></h3>        
            </div>
            <div id="particles-js" class="header">
            </div>
        </header>
        

        <section class="w-full h-full bodyWrapper" :style="{ 'backgroundImage': 'url(\'' + bgimage + '\')' }">
            <div class="blurred-box p-6">
                <div class="wrapper">
                    <v-row class="mb-4">
                        <v-col cols="12" xs="12" sm="8">
                            <v-radio-group row v-model="radio" dense hide-details>
                                <v-radio label="متن" value="0" color="white"></v-radio>
                                <v-radio label="آدرس اینترنتی (URL)" value="1" color="white"  class="mr-16"></v-radio>
                            </v-radio-group>
                        </v-col>
                        <!--  <v-col cols="12" sm="0">
                            <div></div> 
                        </v-col> -->

                        <v-col cols="12" xs="12" sm="4">
                            <v-btn @click="textBriefer" color="error" dark large class="float-left" :loading="loadingState">خلاصه‌سازی</v-btn>
                        </v-col>
                    </v-row>
                    
                    
                    <v-text-field
                    v-model="raw_text"
                    :clearable="clearable"
                    clear-icon="fas fa-times"
                    v-if="radio == '1'"
                    :placeholder="url_placeholder"
                    outlined
                    background-color="#00000065"
                    class="white--text"
                    color="white" rows="2"
                    no-resize
                    style="direction:ltr;"
                    name="url-input" >
                    </v-text-field>

                    <v-textarea
                    rows="8"
                    no-resize
                    :auto-grow="!autoGrow"
                    v-model="raw_text"
                    
                    v-else
                    outlined
                    background-color="#00000065"
                    color="white"
                    class="white--text"
                    name="text-input"
                    :placeholder="textAreaPlaceholder">
                    </v-textarea>
                    
                    <v-textarea
                    outlined
                    :auto-grow="autoGrow"
                    append-icon="far fa-copy"
                    @click:append="copyText"
                    :readonly="readonly"
                    name="text-output"
                    color="white"
                    background-color="#00000065"
                    :value="summarized_text">
                    </v-textarea>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data: () => ({
        bgimage: require('../assets/3424974.jpg'),

        radio: '0',
        summarized_text: '',
        raw_text: '',
        
        loadingState: false,
        clearable: true,
        autoGrow:true,
        readonly:true,
        
        url_placeholder: 'https://www.zoomit.ir/2016/4/20/129560/be-kind-to-artificial-intelligence/',
        textAreaPlaceholder: 'متن خود را در این کادر وارد کنید.'
    }),
    methods:{
        textBriefer: function(){
            this.loadingState = true;
            let self = this;
            this.axios.post('https://api.summarizer.syfract.com/bert',{
                text: self.raw_text
            }).then(function (response){
                self.summarized_text = response.data.summary;
                self.loadingState = false;
            })
            .catch(function(error){
                console.error(error);
                self.summarized_text = "خطایی در دریافت اطلاعات از سرور رخ داد";
                self.loadingState = false;
            })
            
        },

        copyText(){
            this.$copyText(this.summarized_text).then((e)=>{
                alert('خلاصه متن در کلیپ‌بورد کپی شد.')
                console.log(e)
            },(e)=>{alert('can not copy')
            console.log(e)})
        console.log("hi im copied")
        }
    },
    mounted() {
        /* eslint-disable */
        particlesJS.load('particles-js', '@/assets/particles.json', function() {
            // console.log('callback - particles.js config loaded');
        });
    },
    watch: {
        "radio": function() {
            this.raw_text = "";
        }
    }
}
</script>

<style scoped>
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

    .header{
        background: linear-gradient(-45deg, #ee7752, #e73c7e,#23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        color: white;
    }
    .headerWrapper{
        height: 150px;
        position: relative;
    }
    .headerCover{
        position: absolute;
        background: transparent;
        display: block;
        left: 50%;
        margin-left: -150px;
        width: 300px;
        top: 50%;
        height: 50px;
        margin-top: -50px;
        color: white;
    }
    @keyframes gradient{
        0% {
            background-position: 0% 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .headerTitle{
        font-size: 2rem;
        min-width: 220px;
        width: 316px;
        margin: auto;
    }
    .headerSubtitle{
        font-size: 1.25rem;
        display: block;
        min-width: 220px;
        width: 316px;
        margin: auto;
    }

    .bodyWrapper{
        height: auto;
        min-height: calc(100% - 144px);
        padding: 20px;
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        /* background-image:url(http://bit.ly/2gPLxZ4); */
        /* background-image: url('~./assets/3424974.jpg'); */
        
        font-family: Arial, Helvetica;
        letter-spacing: 0.02em;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }

    .blurred-box{
        max-width: 1300px;
        width: 100%;
        /* height: 80vh; */
        height: auto;
        background: inherit;
        border-radius: 20px;
        border-width: 1px;
        border-color: #202020;
        /* overflow: hidden; */
        margin: 30px auto;
        position: relative;
        /* backdrop-filter: blur(20px); */
    }

    .blurred-box:after{
        content: '';
        /* height: 90vh; */
        background: inherit; 
        position: absolute;
        filter: blur(20px);
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;

    }

    .wrapper{
        position: relative;
        /* margin-top: 50px; */
        text-align: center;
        z-index: 1;
        width: 100%;
    }

    .v-radio .v-label{
        font-family: IranSansRegular;
        color: white !important;
        font-size: 1rem !important;
        direction: rtl;
    }

   .v-textarea .v-label{
        font-family: IranSansRegular;
        font-weight: 900;
        color: rgb(255, 255, 255) !important;
        font-size: .95rem !important;
    }

    .v-textarea{
        resize: both !important;
        font-family: IranSansRegular;
    }

</style>