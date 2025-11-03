const AppointmentBooking = () => {
  return (
    <div>
      <h2>Schedule Your Free Consultation</h2>
      <form method="post" action="">
        <div>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
          />
        </div>
        
        <div>
          <label htmlFor="date">Preferred Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            required
          />
        </div>
        
        <div>
          <label htmlFor="time">Preferred Time *</label>
          <select id="time" name="time" required>
            <option value="">Select a time</option>
            <option value="Morning (9-12)">Morning (9-12)</option>
            <option value="Afternoon (12-4)">Afternoon (12-4)</option>
            <option value="Evening (4-6)">Evening (4-6)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="notes">Additional Information</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            placeholder="Tell us about your situation or any specific questions..."
          ></textarea>
        </div>
        
        <div>
          <button type="submit">Schedule Consultation</button>
        </div>
      </form>
      
      <div>
        <p>Prefer to call?</p>
        <a href="tel:504-252-8204">(504) 252-8204</a>
      </div>
    </div>
  );
};

export default AppointmentBooking;
