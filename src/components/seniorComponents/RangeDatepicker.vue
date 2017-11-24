<template lang="html">
    <section>
      <el-date-picker
        v-model="startDate"
        type="date"
        placeholder="选择日期"
        @change="handleStartChange"
        clearable
        :picker-options="startPickerOptions"
        value-format="yyyy-MM-dd">
      </el-date-picker>
      <span> - </span>
      <el-date-picker
        v-model="endDate"
        type="date"
        placeholder="选择日期"
        @change="handleEndChange"
        clearable
        :picker-options="endPickerOptions"
        value-format="yyyy-MM-dd">
      </el-date-picker>
    </section>
</template>

<script>
/**
 * 区域时间选择组件
 * start  开始的时间
 * end    结束的时间
 * district 是否限制
 */
export default {
  data () {
    return {
      startDate: '',
      endDate: '',
      startPickerOptions: {
        disabledDate (time) {
          return false
        }
      },
      endPickerOptions: {
        disabledDate (time) {
          return false
        }
      }
    }
  },
  created () {
    this.startDate = this.start
    this.endDate = this.end
  },
  watch: {
    start (newValue, oldValue) {
      this.startDate = newValue
    },
    end (newValue, oldValue) {
      this.endDate = newValue
    }
  },
  methods: {
    handleStartChange (ctime) {
      if (this.district) {
        this.startPickerOptions.disabledDate = time => {
          return this.endDate ? (time.getTime() > new Date(this.endDate).getTime() || time.getTime() < new Date(this.endDate).getTime() - 8.64e7 * 15) : time.getTime() < new Date(ctime) - 8.64e7
        }
        this.endPickerOptions.disabledDate = time => {
          return time.getTime() > new Date(ctime).getTime() + 8.64e7 * 14 || time.getTime() < new Date(ctime).getTime() - 8.64e7
        }
      }

      this.$emit('update:start', ctime)
    },
    handleEndChange (ctime) {
      if (this.district) {
        this.startPickerOptions.disabledDate = time => {
          return time.getTime() < new Date(ctime).getTime() - 8.64e7 * 15 || time.getTime() > new Date(ctime).getTime()
        }
        this.endPickerOptions.disabledDate = time => {
          return this.startDate ? (time.getTime() < new Date(this.startDate).getTime() - 8.64e7 || time.getTime() > new Date(this.startDate).getTime() + 8.64e7 * 14) : time.getTime() > new Date(ctime).getTime() + 8.64e7
        }
      }

      this.$emit('update:end', ctime)
    }
  },
  props: ['start', 'end', 'district']
}
</script>

<style lang="scss">
</style>
