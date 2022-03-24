// import React, { useCallback, useEffect, useState } from 'react';
// import { BsPause, BsPlayFill, BsTrash2Fill } from 'react-icons/bs';
// import { useDispatch } from 'react-redux';

// import { useAppSelector } from '../../app/hooks/redux';
// import { actionDecrement, actionSetIntervalID } from '../../shared/store/reducers/counter';
// import { actionChangePlayingStatus } from '../../shared/store/reducers/playing';
// import Buttons from './Buttons';

// export function NavBar() {
//   const [disablePlay, setDisablePlay] = useState(false);
//   const dispatch = useDispatch();
//   const {
//     isPlaying,
//     countdown: { interval_id, ms },
//   } = useAppSelector(state => state);

//   const shouldResetTimer = useCallback(() => {
//     clearTimeout(interval_id);
//     dispatch(actionChangePlayingStatus(false));
//     dispatch(actionDecrement(ms));
//     dispatch(actionSetIntervalID());
//   }, [dispatch, interval_id, ms]);

//   useEffect(() => {
//     if (!ms) {
//       setDisablePlay(true);
//       shouldResetTimer();
//     } else setDisablePlay(false);
//   }, [ms, shouldResetTimer]);

//   const INTERVAL = () => {
//     const ID = setInterval(() => {
//       dispatch(actionDecrement(1000));
//     }, 1000);
//     return ID;
//   };

//   const handleCountPause = () => {
//     clearInterval(interval_id);
//     dispatch(actionChangePlayingStatus(!isPlaying));
//     dispatch(actionSetIntervalID());
//   };

//   const handleCountPlay = () => {
//     dispatch(actionChangePlayingStatus(!isPlaying));
//     dispatch(actionSetIntervalID(INTERVAL()));
//   };

//   const handleCountStatus = () => {
//     if (isPlaying) handleCountPause();
//     else handleCountPlay();
//   };

//   return (
//     <div className="flex flex-col items-center min-w-20">
//       {!isPlaying && (
//         <div className="flex gap-3">
//           <Buttons value={1} />
//           <Buttons value={5} />
//           <Buttons value={10} />
//         </div>
//       )}
//       <div className="flex mt-4 w-36 text-sky-300 rounded-sm shadow-md bg-slate-800">
//         <button
//           className="flex flex-auto justify-center items-center pr-1 h-10 text-center hover:text-sky-900 hover:bg-emerald-600 disabled:hover:bg-slate-800"
//           disabled={disablePlay}
//           onClick={handleCountStatus}
//         >
//           {isPlaying ? <BsPause /> : <BsPlayFill />}
//         </button>
//         <button
//           className="flex flex-auto justify-center items-center pl-1 h-10 text-center min-w-20 hover:text-sky-900 hover:bg-red-400"
//           onClick={shouldResetTimer}
//         >
//           <BsTrash2Fill />
//         </button>
//       </div>
//     </div>
//   );
// }
