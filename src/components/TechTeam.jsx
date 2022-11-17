export const TechTeam = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>TECH TEAM</h2>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div className="CenterItem">
                <div key={`${d.name}-${i}`} className='col-md-6 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img1' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
