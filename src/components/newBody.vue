<template>
    <v-container class="myDiv">
        <v-radio-group row >
            <v-radio color="white" label="آدرس اینترنتی" value="radio-1"></v-radio>
            <v-radio label="متن" value="radio-2"></v-radio>
        </v-radio-group>
                <v-textarea
          name="input-7-1"
          label="Default style"
          placeholder="Test Test"
          hint="Hint text"
          solo rows="1"
          class="myTA"
        ></v-textarea>
    </v-container>
</template>

<script>
    export default {
    data: () => ({
    defaultItem: {
    id: 0,
    text: 'فارسی (Persian)',
    snackbar: false, 
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
            this.snackbar = true;
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
                this.snackbar = true;
                console.log(e)
            },(e)=>{alert('can not copy')
            console.log(e)})
        console.log("hi im copied")
        }
    },
}
</script>

<style lang="scss">
.myDiv{
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    width: 100%;
    height: 100%;
}
</style>