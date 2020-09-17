import React from 'react'

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors, 
  } = props

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
      change(name, valueToUse)
  }
  const onSubmit = evt => {
    evt.preventDefault();
    submit()
  }
  return(
    <form onSubmit={onSubmit}>
      <div>
        <h2>Onboarding Form</h2>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
       <div className='inputs'>
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={onChange}
          placeholder='enter members name'
        />
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={onChange}
          placeholder = 'enter email'
        />
        <input
          type='password'
          name='password'
          value={values.password}
          onChange={onChange}
          placeholder= 'enter password'
        />
        <h4>Terms of Service</h4>
        <p>Blimey carouser gangway lass fire in the hole boatswain spike hail-shot crack Jennys tea cup walk the plank. Quarterdeck pirate grog blossom Chain Shot grog gun hang the jib ahoy chantey lad. Squiffy keel ahoy fire in the hole bowsprit wench starboard grog overhaul handsomely.</p>
        <p>Wench run a rig hogshead doubloon Privateer ye brigantine reef sails execution dock fathom. Ballast galleon grapple plunder chantey rutters lanyard lee fore aft. Hornswaggle cog brigantine spike chandler avast barque scallywag landlubber or just lubber gaff.</p>
        <p>Bilged on her anchor fire in the hole gaff Nelsons folly snow log come about bilge rat marooned brig. Sea Legs blow the man down sloop pirate man-of-war driver six pounders fire ship chase snow. Letter of Marque brig schooner Spanish Main pillage crimp belay fathom transom fore.</p>
        <h4> "I Agree"</h4>
        <input className='checkbox'
          type='checkbox'
          name='terms'
          checked={values.terms}
          onChange={onChange}
        />
        <br />
       </div>
        <button disabled={disabled}>Submit</button>
      </div>
    </form>
  )
}
