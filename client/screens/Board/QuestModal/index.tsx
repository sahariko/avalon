import * as React from 'react';
import { useSelector } from 'react-redux';
import { showQuestModal } from '../../../store/domains/game/selectors';
import { Icon } from '../../../components';
import shieldIcon from '../../../assets/icons/shield.svg';
import knifeIcon from '../../../assets/icons/knife.svg';
import './style.scss';

const QuestModal = (): React.ReactElement => {
    const show = useSelector(showQuestModal);

    if (!show) {
        return null;
    }

    return (
        <div className="overlay flex-center">
            <div className="modal row">
                <div className="col-sm-12 flex-center">
                    <h2>מה אתה רוצה לעשות במשימה?</h2>
                </div>
                <div className="selection col-md-6 col-sm-12 flex-center">
                    <Icon size={100}>
                        { shieldIcon }
                    </Icon>
                    להצליח
                </div>
                <div className="selection col-md-6 col-sm-12 flex-center">
                    <Icon size={100}>
                        { knifeIcon }
                    </Icon>
                    להכשיל
                </div>
            </div>
        </div>
    );
};

export default QuestModal;
