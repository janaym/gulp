<template>
  <section class="flex flex-col items-center gap-4 text-light-blue p-4 w-full">

    <span class="font-extrabold text-2xl">Where are you?</span>

    <!-- fetch location from geo api -->
    <button class="flex items-center bg-ash-blue text-xl rounded-full px-4 py-1.5 gap-2 hover:bg-slate-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-crosshair" viewBox="0 0 16 16">
        <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
      </svg>
      use my location
    </button>

    <!-- search custom location -->
    <div class="relative w-1/5 flex gap-2 bg-light-blue text-navy px-4 py-1.5 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-dark-navy bi bi-search h-6" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
      <input class="bg-transparent flex-grow outline-none" type="text" placeholder="address / nearby landmark" />
    </div>
  </section>
</template>