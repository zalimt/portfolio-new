<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input name="name" type="text" placeholder="Name" v-model="name">
    <input name="email" type="email" placeholder="Email" v-model="email">
    <textarea name="message" id="message" rows="5" placeholder="Message" v-model="message"></textarea>
    <button type="submit">SEND</button>
  </form>
  <div class="result">
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
    <p>Message: {{ message }}</p>
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
            message: ""
        }
    },
    methods: {
        handleSubmit() {
            let userMessage = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            console.log(userMessage)
            projectFirestore.collection('Incoming Messages').add(userMessage);
        },
        sendEmail(e) {
            try {
                emailjs.sendForm('YOUR_SERVICE_ID', 'template_kphg7lo', e.target,
                'YOUR_USER_ID', {
                name: this.name,
                email: this.email,
                message: this.message
                })

            } catch(error) {
                console.log({error})
            }
            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''
        },
    }
}
</script>

<style lang="scss">

    form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 0 auto;
        gap: 10px;
        padding: 50px 0;

        input {
            height: 40px;
        }

        button {
            height: 40px;
        }
    }
</style>