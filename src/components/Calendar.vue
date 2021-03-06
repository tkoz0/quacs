<template>
  <div class="calendar" :style="{ height: totalHeight + 'px' }">
    <div class="calendar-times">
      <div
        class="hour-label"
        :class="{ hour_label_military: isMilitaryTime() }"
        v-for="hour of strHours"
        :key="hour"
        :style="{ height: hourHeight + '%' }"
      >
        <div>{{ hour }}</div>
      </div>
    </div>

    <div class="calendar-grid">
      <div
        class="grid-day"
        v-for="day in getDays()"
        :key="day.short"
        :style="{ width: dayWidth + '%' }"
      >
        <div class="day-label">{{ day.name }}</div>

        <div
          class="calendar-event"
          v-for="session in sessionsOnDay(day)"
          v-bind:key="
            day.short +
            session.timeslot.timeStart +
            session.section.crn +
            session.timeslot.instrutor +
            session.timeslot.location
          "
          :style="{
            'margin-top': eventPosition(session.timeslot) + 'px',
            height: eventHeight(session.timeslot) + 'px',
            width: dayWidth + '%',
            backgroundColor: colors(session.section.crn).bg,
            borderColor: colors(session.section.crn).border,
            color: colors(session.section.crn).text,
          }"
        >
          <div class="event-text">
            {{ session.section.title }}
            <br />
            {{ session.section.subj }} {{ session.section.crse }} -
            {{ session.section.sec }}
            <br />
            {{ session.section.crn }}
            <br />
            {{ session.timeslot.instructor }}
            <br />
            {{ session.timeslot.location }}
          </div>
        </div>

        <div
          class="grid-hour"
          v-for="hour of strHours"
          :key="hour"
          :style="{ height: hourHeight + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CourseSection, Day, Timeslot } from "@/typings";
import { DAYS, getDuration, minuteTimeToHour, toMinutes } from "@/utilities";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters("settings", ["isMilitaryTime"]),
  },
})
export default class Calendar extends Vue {
  @Prop() readonly crns!: string[];
  readonly startTime = 420;
  readonly endTime = 1320;
  readonly totalHeight = 650;

  getDays(): Day[] {
    const hasWeekend =
      this.sessionsOnDay({ name: "Saturday", short: "S" }).length > 0;

    if (hasWeekend) {
      return DAYS;
    }

    return DAYS.slice(0, 5);
  }

  // get crns() {
  //   if (this.$route.query.crns === undefined) {
  //     return [];
  //   }
  //   return (this.$route.query.crns as string).split(",");
  // }

  get numMinutes(): number {
    return this.endTime - this.startTime;
  }

  get dayWidth(): number {
    return 100 / this.getDays().length;
  }

  get hourHeight(): number {
    return (60 * 100) / this.numMinutes;
  }

  get crnToSections(): { [crn: string]: CourseSection } {
    //maybe refactor so we dont need this. This is just old code from when this was already calculated so it was not extra work to generate it
    const crnToSections: { [crn: string]: CourseSection } = {};

    for (const dept of this.$store.state.departments) {
      for (const course of dept.courses) {
        for (const section of course.sections) {
          crnToSections[section.crn] = section;
        }
      }
    }

    return crnToSections;
  }

  get selected(): CourseSection[] {
    const ret = [];
    for (const crn of this.crns) {
      ret.push(this.crnToSections[crn]);
    }
    return ret;
  }

  get sessionsOnDay() {
    return (day: Day): { section: CourseSection; timeslot: Timeslot }[] => {
      const ret = [];

      for (const section of this.selected) {
        for (const timeslot of section.timeslots) {
          if (timeslot.days.includes(day.short)) {
            ret.push({
              section: section,
              timeslot: timeslot,
            });
          }
        }
      }

      return ret;
    };
  }

  get strHours(): string[] {
    const hours = [];
    for (let time = this.startTime; time < this.endTime; time += 60) {
      hours.push(
        minuteTimeToHour(time, this.$store.getters["settings/isMilitaryTime"]())
      );
    }

    return hours;
  }

  get eventHeight() {
    return (timeslot: Timeslot): number =>
      this.totalHeight * (getDuration(timeslot) / this.numMinutes);
  }

  get eventPosition() {
    return (timeslot: Timeslot): number => {
      const eventStart = toMinutes(timeslot.timeStart);
      return (
        this.totalHeight * ((eventStart - this.startTime) / this.numMinutes)
      );
    };
  }

  get colors() {
    return (crn: number): { [key: string]: string } => {
      const numCalColors = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--num-calendar-colors"
        )
      );
      const colorIdx =
        this.selected.findIndex(
          (section: CourseSection) => section.crn === crn
        ) % numCalColors;

      return {
        bg: "var(--calendar-bg-color-" + colorIdx + ")",
        border: "var(--calendar-border-color-" + colorIdx + ")",
        text: "var(--calendar-text-color-" + colorIdx + ")",
      };
    };
  }
}
</script>

<style scoped lang="scss">
$labelOffset: 0em;
$hourFontSize: 0.7em;
$dayFontSize: 0.8em;

.calendar {
  margin-top: 10px;
  margin-right: 15px;
  position: relative; /* so the overlay will position properly */
  margin-bottom: 15px;
}

.calendar-times {
  position: absolute;
  height: 100%;
  left: $labelOffset;
  top: 0.7em;
}

.hour-label {
  color: var(--calendar-label);
  font-size: $hourFontSize;
  text-align: right;
  font-variant: small-caps;
}

.hour_label_military {
  position: relative;
  left: 0.15rem;
}

.calendar-grid {
  position: absolute;
  width: calc(100% - #{$hourFontSize + $labelOffset + 1.75em});
  height: 100%;
  left: 2.5em;
}

.day-label {
  color: var(--calendar-label);
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: $dayFontSize;
  font-variant: small-caps;
}

.grid-day {
  height: 100%;
  float: left;
}

.grid-hour {
  display: block;
  box-sizing: border-box;
  border-top: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
}

.grid-day:last-of-type .grid-hour {
  border-right: none;
}

.calendar-event {
  display: block;
  box-sizing: border-box;
  border-top: 1px solid #e7e7e7 !important; //temp fix for the borders not showing
  border-right: 1px solid #e7e7e7 !important;
  position: absolute;
  //height: 20%;
  //   width: 20%;

  //margin-top: 1px;
  border-left: 4px solid;
  //   border-opacity: 1;
  overflow: hidden;
  height: 100%;

  .event-text {
    padding: 4px;
    font-weight: bold;
    font-size: 60%;
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
  }
}
</style>

<!--
Modified from source under the below license:

MIT License

Copyright (c) 2020 Yacs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->
