<template>
<div class="form-wrapper">
    <div class="container">
        <form v-if="formVisible" ref="form" @submit.prevent="sendEmail" id="contact" class="form">
            <input name="name" required type="text" placeholder="Name" v-model="name">
            <input name="email" required type="email" placeholder="Email" v-model="email">
            <textarea name="message" required id="message" rows="5" placeholder="Message" v-model="message"></textarea>
            <button class="contact-btn btn-dark" type="submit">SAY HELLO</button>
        </form>
        <teleport to="#app">
            <div v-if="isActive" class="message-success-modal">
                <div class="message-success">
                    <div @click="isActive=false" class="close-modal">✕</div>
                    <p>Your Message Successfully Sent</p>
                    <p><strong>Thank you!</strong></p>
                </div>
            </div>
        </teleport>
    </div>
    <Button @click="openForm" v-if="formBtnVisibility" btnStyle="btn-dark" btnTitle="CONTACT ME"></Button>
</div>
</template>

<script>
// import { projectFirestore } from "../firebase/config"
import emailjs from 'emailjs-com';
import Button from "./Button.vue"

export default {
    name: "FormComp",

    data() {
        return {
            name: "",
            email: "",
            message: "",

            isActive: false,
            formVisible: false,
            formBtnVisibility: true
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('zalim_gmail', 'contact_form', this.$refs.form, 'oOpGZlSuR-6lhWtcy')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    this.isActive = true;
                    this.name="";
                    this.email="";
                    this.message="";
                }, (error) => {
                    console.log('FAILED...', error.text);
                });

                // let userMessage = {
                //     name: this.name,
                //     email: this.email,
                //     message: this.message,
                //     date: new Date()
                // }

                // console.log(userMessage);
                // projectFirestore.collection('Incoming Messages').add(userMessage);

                // this.name = "";
                // this.email = "";
                // this.message = "";
        },
        openForm() {
            this.formVisible = true;
            this.formBtnVisibility = false;
            this.form.scrollIntoView();
        }
    },

    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
    
    @import "../styles/common";

    .btn-dark {
        margin-top: 30px;
    }

</style>