<template>
  <div id="app">
    <div id="banner">
        <b>Vue</b> - TEST Document Object Model (CRUD)
    </div>
    <div id="option">
        <div id="description">
            Zarządzanie obiektami:
        </div>
        <input type="text" id="howMany" name="howMany" placeholder="Wpisz ilość" /><br />
        <button class="Btn" @click="create()"> Stwórz </button>
        <button class="Btn" @click="add()"> Dodaj </button>
        <button class="Btn" @click="ddelete()"> Usuń </button>
        <button class="Btn" @click="update()"> Zaktualizuj </button>
        <button class="Btn" @click="clean()"> Wyczyść </button>
    </div>
    <div id="lista">
      <div v-for="object in selectors" :key="object.id">{{object}} obiekt</div>
    </div>
    <div id="czas">Czas wykonania w milisekundach: <span id="timer"></span> </div>
    <img alt="UAM" src="../assets/logo-uam.jpg">
  </div>
</template>

<script>
export default{
  name: 'app',
  data () {
    return {
      number: 0,
      selectors: [],
      operationStartTime: null,
      operationEndTime: null
    }
  },
  methods: {
    create () {
      this.operationStartTime = performance.now()
      let howMany = parseInt(document.getElementById('howMany').value)
      this.number = howMany
      let temp = []
      for (let i = 0; i < howMany; i++) {
        temp.push(
          i)
      }
      this.selectors = temp
      console.log(this.operationStartTime)
    },
    add () {
      this.operationStartTime = performance.now()
      let howMany = parseInt(document.getElementById('howMany').value)
      let oldNumber = this.number
      let newNumber = oldNumber + howMany
      let temp = this.selectors
      for (oldNumber; oldNumber < newNumber; oldNumber++) {
        temp.push(
          (oldNumber))
      }
      this.selectors = temp
      this.number = newNumber
      console.log(this.selectors)
      console.log(this.number)
    },
    ddelete () {
      this.operationStartTime = performance.now()
      let howMany = parseInt(document.getElementById('howMany').value)
      let oldNumber = this.number
      let newNumber = oldNumber - howMany
      let temp = this.selectors
      temp.splice(newNumber, howMany)
      this.selectors = temp
      this.number = newNumber
    },
    update () {
      this.operationStartTime = performance.now()
      let howMany = parseInt(document.getElementById('howMany').value)
      let min = Math.ceil(1)
      let max = Math.floor(1001)

      let oldNumber = this.number
      let newNumber = oldNumber - howMany
      for (newNumber - 1; newNumber < oldNumber; newNumber++) {
        let random = Math.floor(Math.random() * (max - min)) + min
        this.$set(this.selectors, newNumber, random)
      }
      this.number = oldNumber
      console.log(this.selectors)
    },
    clean () {
      this.operationStartTime = performance.now()
      this.selectors = []
      this.number = 0
    }
  },
  updated: function () {
    this.operationEndTime = performance.now()
    let temp = this.operationEndTime - this.operationStartTime
    document.getElementById('timer').innerHTML = temp
  }
}
</script>
