<template>
  <div class="bg-black text-white">
    <Header />
    <div class="flex">
      <div class="flex-initial w-2/3">
        <Chart />
      </div>
      <div class="flex-initial w-1/3">
        <Summary />
      </div>
    </div>
    <div class="flex">
      <div class="flex-initial w-full">
        <Tab />
        <div class="grid gap-4 grid-cols-2">
          <InstrumentList />
          <InstrumentList />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chart, Summary, Header, Tab, InstrumentList } from '@/components'
</script>
