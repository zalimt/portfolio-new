<template>
<div class="form-wrapper">
    <div class="container">
        <form ref="form" @submit.prevent="sendEmail" id="contact" class="form">
            <input name="name" required type="text" placeholder="Name" v-model="name">
            <input name="email" required type="email" placeholder="Email" v-model="email">
            <textarea name="message" required id="message" rows="5" placeholder="Message" v-model="message"></textarea>
            <button class="contact-btn btn-dark" type="submit">SAY HELLO</button>
        </form>
        <div v-if="isActive" class="message-success-modal">
            <div class="message-success">
                <div @click="isActive=false" class="close-modal">✕</div>
                <p>Your Message Successfully Sent</p>
                <p><strong>Thank you!</strong></p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { projectFirestore } from "../firebase/config"
import emailjs from 'emailjs-com';

export default {
    name: "FormComp",

    data() {
        return {
            name: "",
            email: "",
            message: "",

            isActive: false,
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('zalim_gmail', 'contact_form', this.$refs.form, 'oOpGZlSuR-6lhWtcy')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    this.isActive = true;
                }, (error) => {
                    console.log('FAILED...', error.text);
                });

                let userMessage = {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    date: new Date()
                }

                // console.log(userMessage);
                projectFirestore.collection('Incoming Messages').add(userMessage);

                this.name = "";
                this.email = "";
                this.message = "";
            }
    }
}
</script>

<style lang="scss">
    
    @import "../styles/common";
    @import "../styles/form";

</style>