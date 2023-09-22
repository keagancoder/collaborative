package com.citi.collaborative.service;

import com.citi.collaborative.common.InternalResponse;
import com.citi.collaborative.common.Ops;
import com.citi.collaborative.dao.IBaseDao;
import com.citi.collaborative.domain.CommonDomain;
import com.citi.collaborative.service.api.IBaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

@SuppressWarnings("unchecked")
public abstract class AbstractService<T extends CommonDomain> implements IBaseService<T> {

    public static final Logger LOGGER = LoggerFactory.getLogger(AbstractService.class);

    private IBaseDao<T> baseDao;

    public InternalResponse<Void> saveMany(T... targets) {
        try {
            baseDao.save(targets);
            return InternalResponse.success(null);
        } catch (Exception ex) {
            LOGGER.error(">>> save encounter error", ex);
            return InternalResponse.fail("Unknown exception");
        }
    }

    public InternalResponse<Void> updateMany(T... targets) {
        try {
            baseDao.update(targets);
            return InternalResponse.success(null);
        } catch (Exception ex) {
            LOGGER.error(">>> update encounter error", ex);
            return InternalResponse.fail("Unknown exception");
        }
    }

    public InternalResponse<T> findAll(Ops<T> ops, Class<T> type) {
        try {
            return InternalResponse.success(baseDao.list(ops, type));
        } catch (Exception ex) {
            LOGGER.error(">>> update encounter error", ex);
            return InternalResponse.fail("Unknown exception");
        }
    }

    /**
     *
     * @param type
     * @return
     */
    public InternalResponse<T> findAll(Class<T> type) {
        try {
            return InternalResponse.success(baseDao.findAll(type));
        } catch (Exception ex) {
            LOGGER.error(">>> update encounter error", ex);
            return InternalResponse.fail("Unknown exception");
        }
    }

    @Autowired
    public void setBaseDao(IBaseDao<T> baseDao) {
        this.baseDao = baseDao;
    }
}
