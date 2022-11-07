<template>
<div class="form-wrapper">
    <div class="container">
        <form ref="form" @submit.prevent="sendEmail" id="contact" class="form">
            <input name="name" required type="text" placeholder="Name" v-model="name">
            <input name="email" required type="email" placeholder="Email" v-model="email">
            <textarea name="message" required id="message" rows="5" placeholder="Message" v-model="message"></textarea>
            <button type="submit">SEND</button>
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
    $yellow: #FFD600;

    .form-wrapper {
        background: #151515;
        padding-bottom: 50px;

        form {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            margin: 0 auto;
            gap: 10px;
            padding: 50px 0;
    
            input {
                height: 40px;
                border: none;
                border-bottom: 1px solid #ccc;
                background: none;
                font-size: 18px;
                padding-left: 7px;
                color: $yellow;

                &:focus-visible {
                    outline: none;
                    border-bottom: 1px solid $yellow;
                }
            }

            textarea {
                height: 150px;
                background: none;
                font-size: 18px;
                border: 1px solid #ccc;
                margin-top: 10px;
                padding: 7px;
                color: $yellow;

                &:focus-visible {
                    outline: 1px solid $yellow;
                    border: none;
                }
            }
    
            button {
                height: 50px;
                color: #151515;
                background: $yellow;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                border: none;
              }
            }

            .message-success-modal {
                background: rgba(0,0,0,0.6);
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                // display: none;

                .close-modal {
                    color: #fff;
                    position: absolute;
                    top: 7px;
                    right: 15px;
                    font-size: 30px;
                    cursor: pointer;
                }

                .message-success {
                    background: #000;
                    color: $yellow;
                    max-width: 300px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding: 40px;
                }
            }

    }
    
</style>