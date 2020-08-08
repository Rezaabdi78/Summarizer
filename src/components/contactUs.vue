<template>
<div class="w-4/5 p-6 inline-block">
  <v-container fluid >
    <v-row align = "center">
        <v-col cols="12" md="5">
            <h1 class="text-right thick">نام و نام خانوادگی</h1>
                <v-textarea class="thin"
                outlined solo name="input" no-resize rows="1" v-model="name" :placeholder="null" :auto-grow="autoGrow" :clearable="clearable"></v-textarea>
        </v-col>
                
        <v-col cols="12" md="1"></v-col>

        <v-col cols="12" md="6">
            <h1 class="text-right thick ">رایانامه</h1>
                <v-textarea class="thin email"
                outlined solo name="input" no-resize rows="1" v-model="email" :placeholder="null" :auto-grow="autoGrow" :clearable="clearable"></v-textarea>
        </v-col>
    </v-row>

    <v-row align="right">
      <v-col cols="12" md="12">
          <h1 class="text-right thick">متن پیام</h1>
          <v-textarea class="thin" outlined solo name="input" no-resize rows="8" :placeholder="placeholder" :clearable="clearable" :auto-grow="!autoGrow" v-model="issue"></v-textarea>
      </v-col>
    </v-row>

    <v-row align="left" >
        <v-col class="d-flex thick" cols="12" sm="12" md="12" >
            <v-btn :x-large="x_larged" color="#0f4c81" class="btn white--text" @click="sendIssue">ارسال</v-btn>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
           problem_set:{ name:"",
            email:"",
            issue:"",},
            placeholder:"متن پیام خود را در این کادر وارد کنید.",
            autoGrow:true,
            clearable:true,
            x_larged:true,
        }
    },
    methods:{
        sendIssue(){
            console.log("we've got an issue :(");
            //send issue to support email
            return this.problem_set;
        }
    }
}
</script>

<style scoped>
.thick{
        font-family: VazirBlack;
    }
.thin{
        font-family: Vazir;
    }
.email{
    direction: ltr;
}
.d-flex{
    float: left;
    padding-top: 4px;
}
</style>