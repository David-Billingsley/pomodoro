import * as d3 from 'd3'
const MARGIN = {TOP: 10, BOTTOM: 60, LEFT: 70, RIGHT: 10}

const WIDTH = 400 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 300 - MARGIN.TOP - MARGIN.BOTTOM

export default class D3Chart {
    constructor(element) {
        const svg = d3.select(element)
            .append("svg")
            .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
            .append('g')
            .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

        d3.json('times.json').then(data => {


                const max = d3.max(data, d => {
                    return d.Count + .1
                })

                const min = d3.min(data, d => {
                    if (d.Count >= 0) {
                        return (d.Count * .9)
                    } else {
                        return d.Count * 1.2
                    }
                })

                const y = d3.scaleLinear()
                    .domain([min, max])
                    .range([HEIGHT, 0])

                const x = d3.scaleBand()
                    .domain(data.map((names) => names.Time))
                    .range([0, WIDTH])
                    .padding(0.4)

                const rect = svg.selectAll('rect')
                    .data(data)

                const xAxisCall = d3.axisBottom(x)
                svg.append('g')
                    .call(xAxisCall)
                    .attr('transform', `translate(0, ${HEIGHT})`)

                const yAxisCall = d3.axisLeft(y)
                svg.append('g').call(yAxisCall)

                svg.append('text')
                    .attr("x", WIDTH / 2)
                    .attr('y', HEIGHT + 50)
                    .attr('text-anchor', 'middle')
                    .text('Times')

                svg.append('text')
                    .attr('x', -HEIGHT / 2)
                    .attr('y', -50)
                    .attr('text-anchor', 'middle')
                    .text('Count of Activities')
                    .attr('transform', 'rotate(-90)')

                rect.enter().append('rect')
                    .attr('x', (d, i) => x(d.Time))
                    .attr('y', d => y(d.Count)) // converts the bar from upside down to right side up
                    .attr('width', x.bandwidth)
                    .attr('height', d => HEIGHT - y(d.Count))
                    .attr('fill', 'blue')
            }
        )
    }
}