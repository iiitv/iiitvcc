"use client";

import { useState, useRef } from "react";
import { createEvent } from "@/app/profile/admin/_actions/createEvent";

const defaultPrize = { label: "", value: "" };
const defaultCategory = { category: "", prizes: [{ ...defaultPrize }] };

function useCategoryPrizes() {
  const [prizes, setPrizes] = useState([{ ...defaultCategory }]);

  const handleCategoryChange = (catIdx, value) => {
    setPrizes((prizes) =>
      prizes.map((cat, i) =>
        i === catIdx ? { ...cat, category: value } : cat,
      ),
    );
  };
  const handlePrizeLabelChange = (catIdx, prizeIdx, value) => {
    setPrizes((prizes) =>
      prizes.map((cat, i) =>
        i === catIdx
          ? {
              ...cat,
              prizes: cat.prizes.map((p, j) =>
                j === prizeIdx ? { ...p, label: value } : p,
              ),
            }
          : cat,
      ),
    );
  };
  const handlePrizeValueChange = (catIdx, prizeIdx, value) => {
    setPrizes((prizes) =>
      prizes.map((cat, i) =>
        i === catIdx
          ? {
              ...cat,
              prizes: cat.prizes.map((p, j) =>
                j === prizeIdx ? { ...p, value } : p,
              ),
            }
          : cat,
      ),
    );
  };
  const addCategory = () => {
    setPrizes((prizes) => [...prizes, { ...defaultCategory }]);
  };
  const removeCategory = (idx) => {
    setPrizes((prizes) =>
      prizes.length === 1 ? prizes : prizes.filter((_, i) => i !== idx),
    );
  };
  const addPrize = (catIdx) => {
    setPrizes((prizes) =>
      prizes.map((cat, i) =>
        i === catIdx
          ? { ...cat, prizes: [...cat.prizes, { ...defaultPrize }] }
          : cat,
      ),
    );
  };
  const removePrize = (catIdx, prizeIdx) => {
    setPrizes((prizes) =>
      prizes.map((cat, i) =>
        i === catIdx
          ? {
              ...cat,
              prizes:
                cat.prizes.length === 1
                  ? cat.prizes
                  : cat.prizes.filter((_, j) => j !== prizeIdx),
            }
          : cat,
      ),
    );
  };
  return {
    prizes,
    handleCategoryChange,
    handlePrizeLabelChange,
    handlePrizeValueChange,
    addCategory,
    removeCategory,
    addPrize,
    removePrize,
  };
}

async function handleEventSubmit(e, prizes) {
  e.preventDefault();
  const formData = new FormData(e.target);

  // convert prizes array to object
  const prizesObj = {};
  prizes.forEach((cat) => {
    if (cat.category.trim()) {
      prizesObj[cat.category] = {};
      cat.prizes.forEach((prize) => {
        if (prize.label.trim() && prize.value.trim()) {
          prizesObj[cat.category][prize.label] = prize.value;
        }
      });
    }
  });
  formData.append("prizes", JSON.stringify(prizesObj));
  const { data, error } = await createEvent(formData);
}

function AddEvent() {
  const [mode, setmode] = useState(null);
  const [givingPrizes, setgivingPrizes] = useState(true);
  const [posterFile, setPosterFile] = useState(null);
  const [registrationHosted, setregistrationHosted] = useState(true);
  const fileInputRef = useRef();
  const {
    prizes,
    handleCategoryChange,
    handlePrizeLabelChange,
    handlePrizeValueChange,
    addCategory,
    removeCategory,
    addPrize,
    removePrize,
  } = useCategoryPrizes();

  const handlePosterChange = (e) => {
    setPosterFile(e.target.files[0]);
  };

  return (
    <div className="m-3 w-full h-fit border-2 border-primary rounded-3xl p-6">
      <form
        className="flex flex-row flex-wrap justify-around items-center gap-10 text-black"
        onSubmit={(e) => handleEventSubmit(e, prizes)}
      >
        <div className="w-fit flex flex-col">
          <label
            htmlFor="eventName"
            className="mb-1 font-medium text-white text-center"
          >
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            name="name"
            className="p-2 border rounded"
            placeholder="Enter event name"
            required
          />
        </div>
        <div className="w-full flex flex-col">
          <label
            htmlFor="eventDescription"
            className="mb-1 font-medium text-white text-center"
          >
            Event Description
          </label>
          <textarea
            id="eventDescription"
            name="description"
            className="p-2 border rounded w-full resize-y min-h-[100px]"
            placeholder="Enter event description"
            required
          ></textarea>
        </div>
        <div className="w-fit flex flex-col">
          <label
            htmlFor="eventDate"
            className="mb-1 font-medium text-white text-center"
          >
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="date"
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="w-fit flex flex-col">
          <label
            htmlFor="eventWinners"
            className="mb-1 font-medium text-white text-center"
          >
            Event Start Time
          </label>
          <input
            type="time"
            id="eventTime"
            name="time"
            className="p-2 border rounded"
            placeholder="Enter event time"
            required
          />
        </div>
        <div className="w-fit flex flex-col">
          <label
            htmlFor="eventDuration"
            className="mb-1 font-medium text-white text-center"
          >
            Event Duration in sec
          </label>
          <input
            type="number"
            id="eventDuration"
            name="duration"
            className="p-2 border rounded"
            placeholder="Enter event duration"
            required
          />
        </div>
        <div className="w-fit flex flex-col">
          <label
            htmlFor="eventMode"
            className="mb-1 font-medium text-white text-center"
          >
            Event Mode
          </label>
          <select
            onChange={(e) => setmode(e.target.value)}
            id="eventMode"
            name="mode"
            className="p-2 border rounded"
            required
          >
            <option value="true">Online</option>
            <option value="false">Offline</option>
          </select>
        </div>
        {mode === "false" && (
          <div className="w-fit flex flex-col">
            <label
              htmlFor="eventVenue"
              className="mb-1 font-medium text-white text-center"
            >
              Event Venue
            </label>
            <input
              type="text"
              id="eventVenue"
              name="venue"
              className="p-2 border rounded"
              placeholder="Enter event venue"
              required
            />
          </div>
        )}

        {mode === "false" && (
          <div className="w-fit flex flex-col">
            <label
              htmlFor="eventVenueLink"
              className="mb-1 font-medium text-white text-center"
            >
              Event Venue Link
            </label>
            <input
              type="url"
              id="eventVenueLink"
              name="venue_link"
              className="p-2 border rounded"
              placeholder="Enter event venue link"
              required
            />
          </div>
        )}
        <div className="w-full flex flex-col items-center">
          <span
            className={`font-semibold text-lg ${givingPrizes ? "text-green-500" : "text-red-500"}`}
          >
            {givingPrizes ? "Giving Prizes" : "Not Giving Prizes"}
          </span>
          <button
            type="button"
            className={`px-4 py-2 rounded shadow font-semibold transition-colors ${givingPrizes ? "bg-green-600 text-white hover:bg-green-700" : "bg-red-600 text-white hover:bg-red-700"}`}
            onClick={() => setgivingPrizes((givingPrizes) => !givingPrizes)}
          >
            Change
          </button>
        </div>
        {givingPrizes === true && (
          <div className="w-full flex flex-col border border-primary rounded p-3 bg-secondary/40">
            <label className="mb-2 font-bold text-pink-300 text-center text-lg">
              Event Prizes (Category-wise)
            </label>
            {prizes.map((cat, catIdx) => (
              <div
                key={catIdx}
                className="mb-4 border-b border-primary pb-3 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    className="p-2 border rounded w-1/3"
                    placeholder="Category (e.g. CP, Web Dev)"
                    value={cat.category}
                    onChange={(e) =>
                      handleCategoryChange(catIdx, e.target.value)
                    }
                  />
                  <button
                    type="button"
                    className="text-white font-bold px-2 bg-red-500 p-1 rounded-lg"
                    onClick={() => removeCategory(catIdx)}
                    disabled={prizes.length === 1}
                  >
                    Remove
                  </button>
                </div>
                {cat.prizes.map((prize, prizeIdx) => (
                  <div key={prizeIdx} className="flex items-center gap-2 mb-1">
                    <input
                      type="text"
                      className="p-2 border rounded w-1/3"
                      placeholder="Prize Label (e.g. Winner)"
                      value={prize.label}
                      onChange={(e) =>
                        handlePrizeLabelChange(catIdx, prizeIdx, e.target.value)
                      }
                      required
                    />
                    <input
                      type="text"
                      className="p-2 border rounded w-1/2"
                      placeholder="Prize Value (e.g. Rs 250 Zomato Voucher)"
                      value={prize.value}
                      onChange={(e) =>
                        handlePrizeValueChange(catIdx, prizeIdx, e.target.value)
                      }
                      required
                    />
                    <button
                      type="button"
                      className="text-white font-bold px-2 bg-red-500 p-1 rounded-lg"
                      onClick={() => removePrize(catIdx, prizeIdx)}
                      disabled={cat.prizes.length === 1}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="text-primary font-semibold mt-1"
                  onClick={() => addPrize(catIdx)}
                >
                  + Add Prize
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-primary text-primary-foreground px-4 py-1 rounded shadow hover:bg-primary-hover transition-colors font-semibold mt-2 w-fit self-center"
              onClick={addCategory}
            >
              + Add Category
            </button>
          </div>
        )}
        <div className="w-fit flex flex-col">
          <label
            htmlFor="eventRequirements"
            className="mb-1 font-medium text-white text-center"
          >
            Event Requirements
          </label>
          <input
            type="text"
            id="eventRequirements"
            name="requirements"
            className="p-2 border rounded"
            placeholder="Enter event requirements (comma separated)"
            required
          />
        </div>

        <div className="w-fit flex flex-col">
          <label
            htmlFor="eventHostLink"
            className="mb-1 font-medium text-white text-center"
          >
            Event Host Link
          </label>
          <input
            type="url"
            id="eventHostLink"
            name="host_link"
            className="p-2 border rounded"
            placeholder="Enter event host link"
            required
          />
        </div>
        <div className="w-fit flex flex-col">
          <label
            htmlFor="eventHostedRegistration"
            className="mb-1 font-medium text-white text-center"
          >
            Hosted Registration ?
          </label>
          <select
            id="eventHostedRegistration"
            name="hosted_registration"
            className="p-2 border rounded"
            required
            value={registrationHosted}
            onChange={(e) => setregistrationHosted(e.target.value === "true")}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {registrationHosted && (
          <div className="w-fit flex flex-col">
            <label
              htmlFor="eventRegisterUntil"
              className="mb-1 font-medium text-white text-center"
            >
              Event Register Until
            </label>
            <input
              type="datetime-local"
              id="eventRegisterUntil"
              name="register_until"
              className="p-2 border rounded"
              required
            />
          </div>
        )}
        {registrationHosted && (
          <div className="w-fit flex flex-col">
            <label
              htmlFor="eventRegistrationLink"
              className="mb-1 font-medium text-white text-center"
            >
              Event Registration Link
            </label>
            <input
              type="url"
              id="eventRegistrationLink"
              name="registration_link"
              className="p-2 border rounded"
              placeholder="Enter event registration link"
              required
            />
          </div>
        )}
        <div className="w-full flex flex-col">
          <label
            htmlFor="eventConvenors"
            className="mb-1 font-medium text-white text-center"
          >
            Event Convenors
          </label>
          <textarea
            id="eventConvenors"
            name="convenors"
            className="p-2 border rounded"
            placeholder="Enter event convenors (comma separated)"
            required
          />
        </div>
        <div className="w-full items-center flex flex-col text-white ">
          <label
            htmlFor="eventPoster"
            className="mb-1 font-medium text-white text-center"
          >
            Event Poster
          </label>
          <div className="flex flex-col items-center gap-1 mt-4 mb-10">
            <button
              type="button"
              className="bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-hover transition-colors font-semibold"
              onClick={() =>
                fileInputRef.current && fileInputRef.current.click()
              }
            >
              Choose File
            </button>
            <span className="text-sm text-muted-foreground truncate max-w-xs">
              {posterFile ? posterFile.name : "No file chosen"}
            </span>
          </div>
          <input
            type="file"
            id="eventPoster"
            name="poster"
            ref={fileInputRef}
            className="hidden"
            onChange={handlePosterChange}
            accept="image/*"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white font-bold text-primary-foreground py-2 px-4 rounded hover:bg-primary-hover transition-colors"
        >
          Add Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
