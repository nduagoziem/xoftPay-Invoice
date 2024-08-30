<script setup>

</script>

<template>
    <div class="container-fluid mb-4">

        <div class="container">

            <h4 class="text-center mb-3">Recent Invoices</h4>
            
            <div class="row g-3">

                <div class="col-md-6 col-lg-6"> <!-- Paid Invoice Card Column -->

                    <div class="card">

                        <div class="card-body">

                            <div class="d-flex justify-content-between">

                                <p class="card-title">Davy Jones</p>

                                <div>
                                    <button class="piBtn"> <span class="pi pi-pen-to-square px-1"></span> </button>
                                    <button class="piBtn"> <span class="pi pi-trash px-1"></span> </button>
                                </div>
                            </div>
                            <span>davyjones44@gmail.com</span>
                        </div>

                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <p>Price</p>
                                <p>Issued Date</p>
                                <p>Due Date</p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>$69.99</p>
                                <p>04 Aug 2024</p>
                                <p>07 Aug 2024</p>
                            </div>

                            <div class="d-flex justify-content-center">
                                <button class="readMore">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-6"> <!-- UnPaid Invoice Card Column -->

                    <div class="card">

                        <div class="card-body">

                            <div class="d-flex justify-content-between">

                                <p class="card-title">Will Smith</p>

                                <div>
                                    <button class="piBtn"> <span class="pi pi-pen-to-square px-1"></span> </button>
                                    <button class="piBtn"> <span class="pi pi-trash px-1"></span> </button>
                                </div>
                            </div>

                            <span>willsmith56@gmail.com</span>
                        </div>

                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p>Price</p>
                                <p>Issued Date</p>
                                <p>Due Date</p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>$100</p>
                                <p>01 Aug 2024</p>
                                <p>07 Aug 2024</p>
                            </div>

                            <div class="d-flex justify-content-center">
                                <button class="readMore">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background-color: aliceblue;
        border: none;
    }

    .card-title {
        font-family:cursive, Arial, Helvetica, sans-serif ;
        font-weight: bold;
    }

    .card-body p {
        width: 100px;
        /* border: 2px solid red; */
        text-align: center;
    }

    .readMore {
        background-color: black;
        padding: 7px 10px;
        border: none;
        border-radius: 5px;
    }

    .piBtn {
        border: none;
        background-color: transparent;
        color: black;
    }

</style>