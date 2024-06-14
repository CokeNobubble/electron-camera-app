class Drag {
  private pageX = 0 // 鼠标按下起始x位置
  private pageY = 0 // 鼠标按下起始y位置
  private width = 0 // 当前窗口宽度
  private height = 0 // 当前窗口高度
  private body?: HTMLBodyElement

  constructor() {}
  public run() {
    // 1.获取body对象
    this.body = document.querySelector('body')!
    console.log(this.body, '123')
    // 2.监听鼠标按下的事件 把this改成Drag的实例
    this.body.addEventListener('mousedown', this.mouseDown.bind(this))
  }

  private mouseDown(e: MouseEvent) {
    console.log(e, '鼠标按下')
    // 3.获取鼠标按下时的位置，宽度和高度
    this.pageX = e.pageX
    this.pageY = e.pageY
    this.width = window.innerWidth
    this.height = window.innerHeight

    // 把this改成Drag的实例
    const mouseMoveCallback = this.mouseMove.bind(this)

    // 4.监听鼠标移动事件
    this.body?.addEventListener('mousemove', mouseMoveCallback)

    // 7.监听鼠标抬起事件，删除鼠标移动事件
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })

    // 8.监听鼠标移出事件 删除鼠标移动事件
    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
  }

  private mouseMove(e: MouseEvent) {
    console.log(e, '鼠标移动')

    // 5.计算移动后的位置与原位置的差值
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY

    // 6.调用预加载脚本的拖拽事件
    window.api.dragWindow({
      x,
      y,
      width: this.width,
      height: this.height
    })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
