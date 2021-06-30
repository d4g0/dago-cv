<template>
  <div action="" class="mb-16">
    <div class="relative">
      <div :class="isSended ? 'opacity-0 ' : ''">
        <h2 class="text-3xl font-bold">Drop me a line</h2>
        <form
          @submit.prevent="handleSubmit"
          netlify
          class="mt-8 space-y-4"
          ref="contactForm"
        >
          <div class="w-full">
            <label for="email" class="sr-only">Name</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input"
              required
            />
          </div>
          <div class="w-full">
            <label for="message" class="sr-only">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              class="input"
              required
            ></textarea>
          </div>
          <div class="">
            <button
              type="submit"
              class="
                font-medium
                w-full
                h-full
                py-3
                rounded-md
                shadow-md
                hover:shadow-lg
                text-white
                bg-indigo-600
                dark:bg-indigo-700
                hover:bg-indigo-700
                dark:hover:bg-indigo-800
                transition-all
                duration-150
                focus:outline-none
                focus:ring-4 focus:ring-indigo-900
                dark:focus:ring-indigo-400
                disable:opacity-70
              "
              :class="isSending ? 'opacity-70' : ''"
              :disabled="isSending"
            >
              {{ isSending ? "Sending" : "Send" }}
            </button>
          </div>
          <div class="relative">
            <transition name="fade-from-bottom">
              <p
                v-show="sendError"
                class="
                  absolute
                  w-full
                  top-0
                  left-0
                  text-center text-sm
                  font-medium
                  text-red-500
                  dark:text-red-400
                "
              >
                Something just happen, try again later.
              </p>
            </transition>
          </div>
        </form>
      </div>
      <transition name="fade-from-bottom">
        <div
          v-if="isSended"
          class="
            absolute
            w-full
            h-full
            top-0
            left-0
            flex
            items-center
            justify-center
          "
        >
          <h3 class="text-xl font-bold text-center">
            Thanks, i will replay you back soon.
          </h3>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSended: false,
      isSending: false,
      sendError: false,
    };
  },
  methods: {
    async handleSubmit() {
      let formData = new FormData(this.$refs.contactFrom);
      console.log({
        rawData: formData,
        data: new URLSearchParams(formData).toString(),
      });
      try {
        const res = await fetch("/contact-form", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        if (res.ok) {
          this.handleSuccess();
        } else {
          this.handleError();
        }
      } catch (error) {
        this.handleError();
      }
    },
    handleSuccess() {
      console.log("(cf) success");
      this.isSending = false;
      this.isSended = true;

    },
    handleError() {
      console.log("(cf) error");
      this.isSending = false;
      this.sendError = true;

      const TID = setTimeout(()=>{
        clearTimeout(TID);
        this.sendError = false;
      },5e3)
    },
  },
};
</script>

<style>
</style>