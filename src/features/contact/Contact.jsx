import styles from './Contact.module.css'

export function Contact () {
  const tuEmail = 'juanssj24@gmailcom'
  const asunto = encodeURIComponent('Contacto desde Portafolio Web - [Tu Nombre]')
  const cuerpo = encodeURIComponent(' Hola [Tu Nombre], vi tu portafolio y me gustaría conversar contigo sobre una oportunidad laboral. Quedo atento/a para coordinar una llamada. Saludos.')
  return (
    <section className={styles.contact} id='contact'>
      <h2>CONTACTO</h2>
      <div className={styles.card}>
        <div className={styles['card__section']}>
          <svg className={styles.icon} fill='none' viewBox='0 0 360 362'><path fill='#25D366' fill-rule='evenodd' d='M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z' clip-rule='evenodd' /></svg>
          <a href='https://wa.me/5520417971' target='blank' className={styles['whatsapp__button']}>
            <div class='svg-wrapper-1'>
              <div class='svg-wrapper'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  // width='24'
                  // height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path
                    fill='currentColor'
                    d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                  />
                </svg>
              </div>
            </div>
            <span className={styles.text}>Enviar mensaje</span>
          </a>
        </div>
        <div className={styles['card__section']}>
          <svg className={styles.icon} viewBox='0 49.4 512 399.42'><g fill='none' fill-rule='evenodd'><g fill-rule='nonzero'><path fill='#4285f4' d='M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z' /><path fill='#34a853' d='M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z' /><path fill='#fbbc04' d='M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z' /></g><path fill='#ea4335' d='M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z' /><path fill='#c5221f' fill-rule='nonzero' d='M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z' /></g></svg>
          <a href={`mailto:${tuEmail}?subject=${asunto}&body=${cuerpo}`}>
            <span className={styles.text}>Contáctame por Correo</span>
          </a>
        </div>
      </div>
    </section>
  )
}
