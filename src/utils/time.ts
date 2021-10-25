const MS_IN_DAY = 24 * 60 * 60 * 1000;
const MS_IN_HOUR = 60 * 60 * 1000;
const MS_IN_MINUTE = 60 * 1000;

class Time {
  private time: number;

  constructor(time: number) {
    this.time = time;
  }

  getRelativeString(target: number): string {
    const diff = target - this.time;
    if (diff > MS_IN_DAY) {
      return `${(diff / MS_IN_DAY).toFixed(0)}일 전`;
    }

    if (diff > MS_IN_HOUR) {
      return `${(diff / MS_IN_HOUR).toFixed(0)}시간 전`;
    }

    if (diff > MS_IN_MINUTE) {
      return `${(diff / MS_IN_HOUR).toFixed(0)}분 전`;
    }

    return '방금 전';
  }

  format(): string {
    const minutes = Math.floor(this.time / MS_IN_MINUTE);
    const seconds = (this.time % MS_IN_MINUTE) / 1000;

    return `${minutes}분 ${seconds}초`;
  }
}

export default Time;
