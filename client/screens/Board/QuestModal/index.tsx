import * as React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import * as events from '../../../../lib/events';
import { QuestOptions } from '../../../../lib/Game/constants';
import { send } from '../../../events';
import { showQuestModal } from '../../../store/domains/game/selectors';
import { getUsername } from '../../../store/domains/user/selectors';
import { Modal, Icon } from '../../../components';
import shieldIcon from '../../../assets/icons/shield.svg';
import knifeIcon from '../../../assets/icons/knife.svg';
import { BASE_SELECTION_CLASSES } from './constants';
import './style.scss';

const QuestModal = (): React.ReactElement => {
    const show = useSelector(showQuestModal);
    const username = useSelector(getUsername);
    const [selected, setSelected] = React.useState(null);

    React.useEffect(() => {
        setSelected(null);
    }, [show]);

    if (!show) {
        return null;
    }

    const handleSuccess = () => {
        setSelected(QuestOptions.Success);
        send(events.Client.QuestSelected, {
            username,
            selected: QuestOptions.Success
        });
    };

    const handleFail = () => {
        setSelected(QuestOptions.Fail);
        send(events.Client.QuestSelected, {
            username,
            selected: QuestOptions.Fail
        });
    };

    const successClasses = classnames(
        BASE_SELECTION_CLASSES,
        'selection-success',
        {
            selected: selected === QuestOptions.Success
        }
    );

    const failClasses = classnames(
        BASE_SELECTION_CLASSES,
        'selection-fail',
        {
            selected: selected === QuestOptions.Fail
        }
    );

    return (
        <Modal show={show} className="quest-modal">
            <div className="row">
                <div className="col-sm-12 flex-center">
                    <h2>מה אתה רוצה לעשות במשימה?</h2>
                </div>
                <div className={successClasses}>
                    <Icon size={100}
                        onClick={handleSuccess}>
                        { shieldIcon }
                    </Icon>
                    להצליח
                </div>
                <div className={failClasses}>
                    <Icon size={100}
                        onClick={handleFail}>
                        { knifeIcon }
                    </Icon>
                    להכשיל
                </div>
            </div>
        </Modal>
    );
};

export default QuestModal;
