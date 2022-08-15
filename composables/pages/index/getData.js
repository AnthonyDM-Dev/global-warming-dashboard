import { ref, computed, useRoute } from '@nuxtjs/composition-api'

const getData = () => {
  const route = useRoute()

  const banner = ref({
    isVisible: true,
    hasStartButton: false
  })

  const childPage = ref({
    isVisible: false
  })

  const phrases = [
    'Climate change is REAL.',
    'The earth is sick.',
    'Watch it by yourself.'
  ]

  const properties = ref({
    areVisible: false,
    list: [
      {
        index: 0,
        cardTitle: 'Temperature',
        pageTitle: 'Temperature',
        description: 'The total average global temperature rise since the industrial revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere is warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4 °C / 7.2 °F).',
        link: '/temperaturepage',
        video: {
          desktop: 'temperature.mp4',
          mobile: 'temperature-mobile.mp4'
        },
        youtubeLink: 'https://www.youtube-nocookie.com/embed/3sqdyEpklFU',
        backgroundColor: 'rgb(253 21 27 / 40%)',
        isOpen: false
      },
      {
        index: 1,
        cardTitle: 'CO2',
        pageTitle: 'Carbon Dioxide',
        description: 'For thousands of years, the natural concentration of CO2 in earth atmosphere was around 280 ppm. From the beginning of the industrial revolution, human activities like the burning of fossil fuels, deforestation, and livestock have increased this amount by more than 30%.',
        link: '/carbondioxidepage',
        video: {
          desktop: 'carbondioxide.mp4',
          mobile: 'carbondioxide-mobile.mp4'
        },
        youtubeLink: 'https://www.youtube-nocookie.com/embed/0oQ_l-1IdOs',
        backgroundColor: 'rgb(255 179 15 / 40%)',
        isOpen: false
      },
      {
        index: 2,
        cardTitle: 'Methane',
        pageTitle: 'Methane',
        description: '50-65% of total global methane emissions come from human activities. These include livestock, agriculture, oil and gas systems, waste from homes and businesses, landfills, and so on.',
        link: '/methanepage',
        video: {
          desktop: 'methane.mp4',
          mobile: 'methane-mobile.mp4'
        },
        youtubeLink: 'https://www.youtube-nocookie.com/embed/hHB47RMOi5M',
        backgroundColor: 'rgb(132 147 36 / 40%)',
        isOpen: false
      },
      {
        index: 3,
        cardTitle: 'N2O',
        pageTitle: 'Nitrous Oxide',
        description: 'Nitrous oxide is 300 times more potent than carbon dioxide and reducing it could have a faster, significant impact on global warming. The largest source of nitrous oxide is agriculture, particularly fertilized soil and animal waste, and that makes it harder to rein in.',
        link: '/nitrousoxidepage',
        video: {
          desktop: 'nitrousoxide.mp4',
          mobile: 'nitrousoxide-mobile.mp4'
        },
        youtubeLink: 'https://www.youtube-nocookie.com/embed/ivp3XXSnwvM',
        backgroundColor: 'rgb(67 127 151 / 40%)',
        isOpen: false
      },
      {
        index: 4,
        cardTitle: 'Polar Ice',
        pageTitle: 'Polar Ice',
        description: 'The arctic is warming around twice as fast as global average. Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic ice cover. From 2010 to present we are losing 12.85% per decade!',
        link: '/polaricepage',
        video: {
          desktop: 'polarice.mp4',
          mobile: 'polarice-mobile.mp4'
        },
        youtubeLink: 'https://www.youtube-nocookie.com/embed/hlVXOC6a3ME',
        backgroundColor: 'rgb(1 41 95 / 40%)',
        isOpen: false
      }
    ]
  })

  const page = computed(() => {
    return properties.value.list.find((property) => {
      return property.link === route.value.path
    })
  })

  return {
    phrases,
    properties,
    page,
    banner,
    childPage
  }
}

export default getData
